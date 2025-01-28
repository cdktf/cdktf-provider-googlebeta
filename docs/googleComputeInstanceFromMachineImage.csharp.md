# `googleComputeInstanceFromMachineImage` Submodule <a name="`googleComputeInstanceFromMachineImage` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceFromMachineImage <a name="GoogleComputeInstanceFromMachineImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image google_compute_instance_from_machine_image}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImage(Construct Scope, string Id, GoogleComputeInstanceFromMachineImageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig">GoogleComputeInstanceFromMachineImageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig">GoogleComputeInstanceFromMachineImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkPerformanceConfig">PutNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAllowStoppingForUpdate">ResetAllowStoppingForUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDesiredStatus">ResetDesiredStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetEnableDisplay">ResetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetKeyRevocationActionType">ResetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadataStartupScript">ResetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkPerformanceConfig">ResetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetPartnerMetadata">ResetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putAdvancedMachineFeatures"></a>

```csharp
private void PutAdvancedMachineFeatures(GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putConfidentialInstanceConfig"></a>

```csharp
private void PutConfidentialInstanceConfig(GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putGuestAccelerator"></a>

```csharp
private void PutGuestAccelerator(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putGuestAccelerator.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkPerformanceConfig` <a name="PutNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkPerformanceConfig"></a>

```csharp
private void PutNetworkPerformanceConfig(GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putParams"></a>

```csharp
private void PutParams(GoogleComputeInstanceFromMachineImageParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(GoogleComputeInstanceFromMachineImageReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putScheduling"></a>

```csharp
private void PutScheduling(GoogleComputeInstanceFromMachineImageScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putServiceAccount"></a>

```csharp
private void PutServiceAccount(GoogleComputeInstanceFromMachineImageServiceAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(GoogleComputeInstanceFromMachineImageShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeInstanceFromMachineImageTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAdvancedMachineFeatures"></a>

```csharp
private void ResetAdvancedMachineFeatures()
```

##### `ResetAllowStoppingForUpdate` <a name="ResetAllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetAllowStoppingForUpdate"></a>

```csharp
private void ResetAllowStoppingForUpdate()
```

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetCanIpForward"></a>

```csharp
private void ResetCanIpForward()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetConfidentialInstanceConfig"></a>

```csharp
private void ResetConfidentialInstanceConfig()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredStatus` <a name="ResetDesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetDesiredStatus"></a>

```csharp
private void ResetDesiredStatus()
```

##### `ResetEnableDisplay` <a name="ResetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetEnableDisplay"></a>

```csharp
private void ResetEnableDisplay()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetGuestAccelerator"></a>

```csharp
private void ResetGuestAccelerator()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyRevocationActionType` <a name="ResetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetKeyRevocationActionType"></a>

```csharp
private void ResetKeyRevocationActionType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataStartupScript` <a name="ResetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMetadataStartupScript"></a>

```csharp
private void ResetMetadataStartupScript()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetNetworkPerformanceConfig` <a name="ResetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetNetworkPerformanceConfig"></a>

```csharp
private void ResetNetworkPerformanceConfig()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetPartnerMetadata` <a name="ResetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetPartnerMetadata"></a>

```csharp
private void ResetPartnerMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceFromMachineImage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceFromMachineImage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceFromMachineImage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceFromMachineImage.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceFromMachineImage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeInstanceFromMachineImage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstanceFromMachineImage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstanceFromMachineImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceFromMachineImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.attachedDisk">AttachedDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList">GoogleComputeInstanceFromMachineImageAttachedDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList">GoogleComputeInstanceFromMachineImageBootDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cpuPlatform">CpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.currentStatus">CurrentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList">GoogleComputeInstanceFromMachineImageGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList">GoogleComputeInstanceFromMachineImageNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference">GoogleComputeInstanceFromMachineImageParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scratchDisk">ScratchDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList">GoogleComputeInstanceFromMachineImageScratchDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference">GoogleComputeInstanceFromMachineImageServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsFingerprint">TagsFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference">GoogleComputeInstanceFromMachineImageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdateInput">AllowStoppingForUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatusInput">DesiredStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplayInput">EnableDisplayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionTypeInput">KeyRevocationActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScriptInput">MetadataStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfigInput">NetworkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadataInput">PartnerMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImageInput">SourceMachineImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForward">CanIpForward</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatus">DesiredStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadata">PartnerMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImage">SourceMachineImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeatures"></a>

```csharp
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference AdvancedMachineFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference">GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference</a>

---

##### `AttachedDisk`<sup>Required</sup> <a name="AttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.attachedDisk"></a>

```csharp
public GoogleComputeInstanceFromMachineImageAttachedDiskList AttachedDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList">GoogleComputeInstanceFromMachineImageAttachedDiskList</a>

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.bootDisk"></a>

```csharp
public GoogleComputeInstanceFromMachineImageBootDiskList BootDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList">GoogleComputeInstanceFromMachineImageBootDiskList</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference ConfidentialInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference</a>

---

##### `CpuPlatform`<sup>Required</sup> <a name="CpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.cpuPlatform"></a>

```csharp
public string CpuPlatform { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `CurrentStatus`<sup>Required</sup> <a name="CurrentStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.currentStatus"></a>

```csharp
public string CurrentStatus { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAccelerator"></a>

```csharp
public GoogleComputeInstanceFromMachineImageGuestAcceleratorList GuestAccelerator { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList">GoogleComputeInstanceFromMachineImageGuestAcceleratorList</a>

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataFingerprint"></a>

```csharp
public string MetadataFingerprint { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterface"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList">GoogleComputeInstanceFromMachineImageNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference NetworkPerformanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.params"></a>

```csharp
public GoogleComputeInstanceFromMachineImageParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference">GoogleComputeInstanceFromMachineImageParamsOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinity"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scheduling"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOutputReference</a>

---

##### `ScratchDisk`<sup>Required</sup> <a name="ScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.scratchDisk"></a>

```csharp
public GoogleComputeInstanceFromMachineImageScratchDiskList ScratchDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList">GoogleComputeInstanceFromMachineImageScratchDiskList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccount"></a>

```csharp
public GoogleComputeInstanceFromMachineImageServiceAccountOutputReference ServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference">GoogleComputeInstanceFromMachineImageServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference">GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference</a>

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsFingerprint"></a>

```csharp
public string TagsFingerprint { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeouts"></a>

```csharp
public GoogleComputeInstanceFromMachineImageTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference">GoogleComputeInstanceFromMachineImageTimeoutsOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.advancedMachineFeaturesInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures AdvancedMachineFeaturesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

---

##### `AllowStoppingForUpdateInput`<sup>Optional</sup> <a name="AllowStoppingForUpdateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdateInput"></a>

```csharp
public object AllowStoppingForUpdateInput { get; }
```

- *Type:* object

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForwardInput"></a>

```csharp
public object CanIpForwardInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.confidentialInstanceConfigInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig ConfidentialInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredStatusInput`<sup>Optional</sup> <a name="DesiredStatusInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatusInput"></a>

```csharp
public string DesiredStatusInput { get; }
```

- *Type:* string

---

##### `EnableDisplayInput`<sup>Optional</sup> <a name="EnableDisplayInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplayInput"></a>

```csharp
public object EnableDisplayInput { get; }
```

- *Type:* object

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.guestAcceleratorInput"></a>

```csharp
public object GuestAcceleratorInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyRevocationActionTypeInput`<sup>Optional</sup> <a name="KeyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionTypeInput"></a>

```csharp
public string KeyRevocationActionTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScriptInput`<sup>Optional</sup> <a name="MetadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScriptInput"></a>

```csharp
public string MetadataStartupScriptInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `NetworkPerformanceConfigInput`<sup>Optional</sup> <a name="NetworkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.networkPerformanceConfigInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig NetworkPerformanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.paramsInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

---

##### `PartnerMetadataInput`<sup>Optional</sup> <a name="PartnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.reservationAffinityInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.schedulingInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.serviceAccountInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageServiceAccount ServiceAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.shieldedInstanceConfigInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

---

##### `SourceMachineImageInput`<sup>Optional</sup> <a name="SourceMachineImageInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImageInput"></a>

```csharp
public string SourceMachineImageInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `AllowStoppingForUpdate`<sup>Required</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.allowStoppingForUpdate"></a>

```csharp
public object AllowStoppingForUpdate { get; }
```

- *Type:* object

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.canIpForward"></a>

```csharp
public object CanIpForward { get; }
```

- *Type:* object

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredStatus`<sup>Required</sup> <a name="DesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.desiredStatus"></a>

```csharp
public string DesiredStatus { get; }
```

- *Type:* string

---

##### `EnableDisplay`<sup>Required</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; }
```

- *Type:* object

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyRevocationActionType`<sup>Required</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartnerMetadata`<sup>Required</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.partnerMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `SourceMachineImage`<sup>Required</sup> <a name="SourceMachineImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.sourceMachineImage"></a>

```csharp
public string SourceMachineImage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures <a name="GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | Whether to enable UEFI networking for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.turboMode">TurboMode</a></code> | <code>string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | The number of physical cores to expose to an instance. |

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; set; }
```

- *Type:* object

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_nested_virtualization GoogleComputeInstanceFromMachineImage#enable_nested_virtualization}

---

##### `EnableUefiNetworking`<sup>Optional</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; set; }
```

- *Type:* object

Whether to enable UEFI networking for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_uefi_networking GoogleComputeInstanceFromMachineImage#enable_uefi_networking}

---

##### `PerformanceMonitoringUnit`<sup>Optional</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; set; }
```

- *Type:* string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#performance_monitoring_unit GoogleComputeInstanceFromMachineImage#performance_monitoring_unit}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#threads_per_core GoogleComputeInstanceFromMachineImage#threads_per_core}

---

##### `TurboMode`<sup>Optional</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.turboMode"></a>

```csharp
public string TurboMode { get; set; }
```

- *Type:* string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#turbo_mode GoogleComputeInstanceFromMachineImage#turbo_mode}

---

##### `VisibleCoreCount`<sup>Optional</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; set; }
```

- *Type:* double

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#visible_core_count GoogleComputeInstanceFromMachineImage#visible_core_count}

---

### GoogleComputeInstanceFromMachineImageAttachedDisk <a name="GoogleComputeInstanceFromMachineImageAttachedDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageAttachedDisk {

};
```


### GoogleComputeInstanceFromMachineImageBootDisk <a name="GoogleComputeInstanceFromMachineImageBootDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageBootDisk {

};
```


### GoogleComputeInstanceFromMachineImageBootDiskInitializeParams <a name="GoogleComputeInstanceFromMachineImageBootDiskInitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageBootDiskInitializeParams {

};
```


### GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig <a name="GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig {
    string ConfidentialInstanceType = null,
    object EnableConfidentialCompute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `ConfidentialInstanceType`<sup>Optional</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; set; }
```

- *Type:* string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#confidential_instance_type GoogleComputeInstanceFromMachineImage#confidential_instance_type}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; set; }
```

- *Type:* object

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_confidential_compute GoogleComputeInstanceFromMachineImage#enable_confidential_compute}

---

### GoogleComputeInstanceFromMachineImageConfig <a name="GoogleComputeInstanceFromMachineImageConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SourceMachineImage,
    GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures AdvancedMachineFeatures = null,
    object AllowStoppingForUpdate = null,
    object CanIpForward = null,
    GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig ConfidentialInstanceConfig = null,
    object DeletionProtection = null,
    string Description = null,
    string DesiredStatus = null,
    object EnableDisplay = null,
    object GuestAccelerator = null,
    string Hostname = null,
    string Id = null,
    string KeyRevocationActionType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string MachineType = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MetadataStartupScript = null,
    string MinCpuPlatform = null,
    object NetworkInterface = null,
    GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig NetworkPerformanceConfig = null,
    GoogleComputeInstanceFromMachineImageParams Params = null,
    System.Collections.Generic.IDictionary<string, string> PartnerMetadata = null,
    string Project = null,
    GoogleComputeInstanceFromMachineImageReservationAffinity ReservationAffinity = null,
    string[] ResourcePolicies = null,
    GoogleComputeInstanceFromMachineImageScheduling Scheduling = null,
    GoogleComputeInstanceFromMachineImageServiceAccount ServiceAccount = null,
    GoogleComputeInstanceFromMachineImageShieldedInstanceConfig ShieldedInstanceConfig = null,
    string[] Tags = null,
    GoogleComputeInstanceFromMachineImageTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance. One of name or self_link must be provided. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.sourceMachineImage">SourceMachineImage</a></code> | <code>string</code> | Name or self link of a machine image to create the instance from on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.allowStoppingForUpdate">AllowStoppingForUpdate</a></code> | <code>object</code> | If true, allows Terraform to stop the instance to update its properties. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.canIpForward">CanIpForward</a></code> | <code>object</code> | Whether sending and receiving of packets with non-matching source or destination IPs is allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether deletion protection is enabled on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.description">Description</a></code> | <code>string</code> | A brief description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.desiredStatus">DesiredStatus</a></code> | <code>string</code> | Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | Whether the instance has virtual displays enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>object</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.hostname">Hostname</a></code> | <code>string</code> | A custom hostname for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#id GoogleComputeInstanceFromMachineImage#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.machineType">MachineType</a></code> | <code>string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata key/value pairs made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | Metadata startup scripts made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | The minimum CPU platform specified for the VM instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.partnerMetadata">PartnerMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.tags">Tags</a></code> | <code>string[]</code> | The list of tags attached to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.zone">Zone</a></code> | <code>string</code> | The zone of the instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance. One of name or self_link must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#name GoogleComputeInstanceFromMachineImage#name}

---

##### `SourceMachineImage`<sup>Required</sup> <a name="SourceMachineImage" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.sourceMachineImage"></a>

```csharp
public string SourceMachineImage { get; set; }
```

- *Type:* string

Name or self link of a machine image to create the instance from on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#source_machine_image GoogleComputeInstanceFromMachineImage#source_machine_image}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.advancedMachineFeatures"></a>

```csharp
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures AdvancedMachineFeatures { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#advanced_machine_features GoogleComputeInstanceFromMachineImage#advanced_machine_features}

---

##### `AllowStoppingForUpdate`<sup>Optional</sup> <a name="AllowStoppingForUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.allowStoppingForUpdate"></a>

```csharp
public object AllowStoppingForUpdate { get; set; }
```

- *Type:* object

If true, allows Terraform to stop the instance to update its properties.

If you try to update a property that requires stopping the instance without setting this field, the update will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#allow_stopping_for_update GoogleComputeInstanceFromMachineImage#allow_stopping_for_update}

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.canIpForward"></a>

```csharp
public object CanIpForward { get; set; }
```

- *Type:* object

Whether sending and receiving of packets with non-matching source or destination IPs is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#can_ip_forward GoogleComputeInstanceFromMachineImage#can_ip_forward}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.confidentialInstanceConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig ConfidentialInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#confidential_instance_config GoogleComputeInstanceFromMachineImage#confidential_instance_config}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether deletion protection is enabled on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#deletion_protection GoogleComputeInstanceFromMachineImage#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#description GoogleComputeInstanceFromMachineImage#description}

---

##### `DesiredStatus`<sup>Optional</sup> <a name="DesiredStatus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.desiredStatus"></a>

```csharp
public string DesiredStatus { get; set; }
```

- *Type:* string

Desired status of the instance. Either "RUNNING", "SUSPENDED" or "TERMINATED".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#desired_status GoogleComputeInstanceFromMachineImage#desired_status}

---

##### `EnableDisplay`<sup>Optional</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; set; }
```

- *Type:* object

Whether the instance has virtual displays enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_display GoogleComputeInstanceFromMachineImage#enable_display}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.guestAccelerator"></a>

```csharp
public object GuestAccelerator { get; set; }
```

- *Type:* object

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#guest_accelerator GoogleComputeInstanceFromMachineImage#guest_accelerator}

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

A custom hostname for the instance.

Must be a fully qualified DNS name and RFC-1035-valid. Valid format is a series of labels 1-63 characters long matching the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D), concatenated with periods. The entire hostname must not exceed 253 characters. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#hostname GoogleComputeInstanceFromMachineImage#hostname}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#id GoogleComputeInstanceFromMachineImage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyRevocationActionType`<sup>Optional</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; set; }
```

- *Type:* string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key_revocation_action_type GoogleComputeInstanceFromMachineImage#key_revocation_action_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs assigned to the instance.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#labels GoogleComputeInstanceFromMachineImage#labels}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The machine type to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#machine_type GoogleComputeInstanceFromMachineImage#machine_type}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata key/value pairs made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#metadata GoogleComputeInstanceFromMachineImage#metadata}

---

##### `MetadataStartupScript`<sup>Optional</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; set; }
```

- *Type:* string

Metadata startup scripts made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#metadata_startup_script GoogleComputeInstanceFromMachineImage#metadata_startup_script}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

The minimum CPU platform specified for the VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#min_cpu_platform GoogleComputeInstanceFromMachineImage#min_cpu_platform}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_interface GoogleComputeInstanceFromMachineImage#network_interface}

---

##### `NetworkPerformanceConfig`<sup>Optional</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.networkPerformanceConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig NetworkPerformanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_performance_config GoogleComputeInstanceFromMachineImage#network_performance_config}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.params"></a>

```csharp
public GoogleComputeInstanceFromMachineImageParams Params { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#params GoogleComputeInstanceFromMachineImage#params}

---

##### `PartnerMetadata`<sup>Optional</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.partnerMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#partner_metadata GoogleComputeInstanceFromMachineImage#partner_metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If self_link is provided, this value is ignored. If neither self_link nor project are provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#project GoogleComputeInstanceFromMachineImage#project}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.reservationAffinity"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#reservation_affinity GoogleComputeInstanceFromMachineImage#reservation_affinity}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#resource_policies GoogleComputeInstanceFromMachineImage#resource_policies}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.scheduling"></a>

```csharp
public GoogleComputeInstanceFromMachineImageScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#scheduling GoogleComputeInstanceFromMachineImage#scheduling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.serviceAccount"></a>

```csharp
public GoogleComputeInstanceFromMachineImageServiceAccount ServiceAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#service_account GoogleComputeInstanceFromMachineImage#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.shieldedInstanceConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#shielded_instance_config GoogleComputeInstanceFromMachineImage#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The list of tags attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#tags GoogleComputeInstanceFromMachineImage#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.timeouts"></a>

```csharp
public GoogleComputeInstanceFromMachineImageTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts">GoogleComputeInstanceFromMachineImageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#timeouts GoogleComputeInstanceFromMachineImage#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone of the instance.

If self_link is provided, this value is ignored. If neither self_link nor zone are provided, the provider zone is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#zone GoogleComputeInstanceFromMachineImage#zone}

---

### GoogleComputeInstanceFromMachineImageGuestAccelerator <a name="GoogleComputeInstanceFromMachineImageGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageGuestAccelerator {
    double Count,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.count">Count</a></code> | <code>double</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.type">Type</a></code> | <code>string</code> | The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#count GoogleComputeInstanceFromMachineImage#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAccelerator.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The accelerator type resource exposed to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#type GoogleComputeInstanceFromMachineImage#type}

---

### GoogleComputeInstanceFromMachineImageNetworkInterface <a name="GoogleComputeInstanceFromMachineImageNetworkInterface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterface {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.accessConfig">AccessConfig</a></code> | <code>object</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.aliasIpRange">AliasIpRange</a></code> | <code>object</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code>object</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.network">Network</a></code> | <code>string</code> | The name or self_link of the network attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkIp">NetworkIp</a></code> | <code>string</code> | The private IP address assigned to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.nicType">NicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.queueCount">QueueCount</a></code> | <code>double</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | A full or partial URL to a security policy to add to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.stackType">StackType</a></code> | <code>string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name or self_link of the subnetwork attached to this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | The project in which the subnetwork belongs. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.accessConfig"></a>

```csharp
public object AccessConfig { get; set; }
```

- *Type:* object

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#access_config GoogleComputeInstanceFromMachineImage#access_config}

---

##### `AliasIpRange`<sup>Optional</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.aliasIpRange"></a>

```csharp
public object AliasIpRange { get; set; }
```

- *Type:* object

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#alias_ip_range GoogleComputeInstanceFromMachineImage#alias_ip_range}

---

##### `InternalIpv6PrefixLength`<sup>Optional</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; set; }
```

- *Type:* double

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#internal_ipv6_prefix_length GoogleComputeInstanceFromMachineImage#internal_ipv6_prefix_length}

---

##### `Ipv6AccessConfig`<sup>Optional</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6AccessConfig"></a>

```csharp
public object Ipv6AccessConfig { get; set; }
```

- *Type:* object

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#ipv6_access_config GoogleComputeInstanceFromMachineImage#ipv6_access_config}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#ipv6_address GoogleComputeInstanceFromMachineImage#ipv6_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name or self_link of the network attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network GoogleComputeInstanceFromMachineImage#network}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The URL of the network attachment that this interface should connect to in the following format: projects/{projectNumber}/regions/{region_name}/networkAttachments/{network_attachment_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_attachment GoogleComputeInstanceFromMachineImage#network_attachment}

---

##### `NetworkIp`<sup>Optional</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.networkIp"></a>

```csharp
public string NetworkIp { get; set; }
```

- *Type:* string

The private IP address assigned to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_ip GoogleComputeInstanceFromMachineImage#network_ip}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, IDPF, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nic_type GoogleComputeInstanceFromMachineImage#nic_type}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.queueCount"></a>

```csharp
public double QueueCount { get; set; }
```

- *Type:* double

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#queue_count GoogleComputeInstanceFromMachineImage#queue_count}

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

A full or partial URL to a security policy to add to this instance.

If this field is set to an empty string it will remove the associated security policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#security_policy GoogleComputeInstanceFromMachineImage#security_policy}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.stackType"></a>

```csharp
public string StackType { get; set; }
```

- *Type:* string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#stack_type GoogleComputeInstanceFromMachineImage#stack_type}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name or self_link of the subnetwork attached to this interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#subnetwork GoogleComputeInstanceFromMachineImage#subnetwork}

---

##### `SubnetworkProject`<sup>Optional</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterface.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; set; }
```

- *Type:* string

The project in which the subnetwork belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#subnetwork_project GoogleComputeInstanceFromMachineImage#subnetwork_project}

---

### GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig {
    string NatIp = null,
    string NetworkTier = null,
    string PublicPtrDomainName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.natIp">NatIp</a></code> | <code>string</code> | The IP address that is be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The networking tier used for configuring this instance. One of PREMIUM or STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | The DNS domain name for the public PTR record. |

---

##### `NatIp`<sup>Optional</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.natIp"></a>

```csharp
public string NatIp { get; set; }
```

- *Type:* string

The IP address that is be 1:1 mapped to the instance's network ip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nat_ip GoogleComputeInstanceFromMachineImage#nat_ip}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The networking tier used for configuring this instance. One of PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_tier GoogleComputeInstanceFromMachineImage#network_tier}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfig.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; set; }
```

- *Type:* string

The DNS domain name for the public PTR record.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#public_ptr_domain_name GoogleComputeInstanceFromMachineImage#public_ptr_domain_name}

---

### GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange {
    string IpCidrRange,
    string SubnetworkRangeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The IP CIDR range represented by this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#ip_cidr_range GoogleComputeInstanceFromMachineImage#ip_cidr_range}

---

##### `SubnetworkRangeName`<sup>Optional</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; set; }
```

- *Type:* string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#subnetwork_range_name GoogleComputeInstanceFromMachineImage#subnetwork_range_name}

---

### GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6">ExternalIpv6</a></code> | <code>string</code> | The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>string</code> | The prefix length of the external IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.name">Name</a></code> | <code>string</code> | The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | The domain name to be used when creating DNSv6 records for the external IPv6 ranges. |

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#network_tier GoogleComputeInstanceFromMachineImage#network_tier}

---

##### `ExternalIpv6`<sup>Optional</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6"></a>

```csharp
public string ExternalIpv6 { get; set; }
```

- *Type:* string

The first IPv6 address of the external IPv6 range associated with this instance, prefix length is stored in externalIpv6PrefixLength in ipv6AccessConfig.

To use a static external IP address, it must be unused and in the same region as the instance's zone. If not specified, Google Cloud will automatically assign an external IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#external_ipv6 GoogleComputeInstanceFromMachineImage#external_ipv6}

---

##### `ExternalIpv6PrefixLength`<sup>Optional</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.externalIpv6PrefixLength"></a>

```csharp
public string ExternalIpv6PrefixLength { get; set; }
```

- *Type:* string

The prefix length of the external IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#external_ipv6_prefix_length GoogleComputeInstanceFromMachineImage#external_ipv6_prefix_length}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this access configuration. In ipv6AccessConfigs, the recommended name is External IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#name GoogleComputeInstanceFromMachineImage#name}

---

##### `PublicPtrDomainName`<sup>Optional</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfig.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; set; }
```

- *Type:* string

The domain name to be used when creating DNSv6 records for the external IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#public_ptr_domain_name GoogleComputeInstanceFromMachineImage#public_ptr_domain_name}

---

### GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig <a name="GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig {
    string TotalEgressBandwidthTier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; set; }
```

- *Type:* string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#total_egress_bandwidth_tier GoogleComputeInstanceFromMachineImage#total_egress_bandwidth_tier}

---

### GoogleComputeInstanceFromMachineImageParams <a name="GoogleComputeInstanceFromMachineImageParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#resource_manager_tags GoogleComputeInstanceFromMachineImage#resource_manager_tags}

---

### GoogleComputeInstanceFromMachineImageReservationAffinity <a name="GoogleComputeInstanceFromMachineImageReservationAffinity" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageReservationAffinity {
    string Type,
    GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation SpecificReservation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.type">Type</a></code> | <code>string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#type GoogleComputeInstanceFromMachineImage#type}

---

##### `SpecificReservation`<sup>Optional</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity.property.specificReservation"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation SpecificReservation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#specific_reservation GoogleComputeInstanceFromMachineImage#specific_reservation}

---

### GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation <a name="GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}

---

### GoogleComputeInstanceFromMachineImageScheduling <a name="GoogleComputeInstanceFromMachineImageScheduling" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageScheduling {
    object AutomaticRestart = null,
    double AvailabilityDomain = null,
    double HostErrorTimeoutSeconds = null,
    string InstanceTerminationAction = null,
    GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeout = null,
    string MaintenanceInterval = null,
    GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration MaxRunDuration = null,
    double MinNodeCpus = null,
    object NodeAffinities = null,
    string OnHostMaintenance = null,
    GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction OnInstanceStopAction = null,
    object Preemptible = null,
    string ProvisioningModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>double</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a></code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#min_node_cpus GoogleComputeInstanceFromMachineImage#min_node_cpus}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.nodeAffinities">NodeAffinities</a></code> | <code>object</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.preemptible">Preemptible</a></code> | <code>object</code> | Whether the instance is preemptible. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `AutomaticRestart`<sup>Optional</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; set; }
```

- *Type:* object

Specifies if the instance should be restarted if it was terminated by Compute Engine (not a user).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#automatic_restart GoogleComputeInstanceFromMachineImage#automatic_restart}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; set; }
```

- *Type:* double

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#availability_domain GoogleComputeInstanceFromMachineImage#availability_domain}

---

##### `HostErrorTimeoutSeconds`<sup>Optional</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.hostErrorTimeoutSeconds"></a>

```csharp
public double HostErrorTimeoutSeconds { get; set; }
```

- *Type:* double

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#host_error_timeout_seconds GoogleComputeInstanceFromMachineImage#host_error_timeout_seconds}

---

##### `InstanceTerminationAction`<sup>Optional</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; set; }
```

- *Type:* string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#instance_termination_action GoogleComputeInstanceFromMachineImage#instance_termination_action}

---

##### `LocalSsdRecoveryTimeout`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.localSsdRecoveryTimeout"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeout { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#local_ssd_recovery_timeout GoogleComputeInstanceFromMachineImage#local_ssd_recovery_timeout}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; set; }
```

- *Type:* string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#maintenance_interval GoogleComputeInstanceFromMachineImage#maintenance_interval}

---

##### `MaxRunDuration`<sup>Optional</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.maxRunDuration"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration MaxRunDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#max_run_duration GoogleComputeInstanceFromMachineImage#max_run_duration}

---

##### `MinNodeCpus`<sup>Optional</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#min_node_cpus GoogleComputeInstanceFromMachineImage#min_node_cpus}.

---

##### `NodeAffinities`<sup>Optional</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.nodeAffinities"></a>

```csharp
public object NodeAffinities { get; set; }
```

- *Type:* object

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#node_affinities GoogleComputeInstanceFromMachineImage#node_affinities}

---

##### `OnHostMaintenance`<sup>Optional</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; set; }
```

- *Type:* string

Describes maintenance behavior for the instance. One of MIGRATE or TERMINATE,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#on_host_maintenance GoogleComputeInstanceFromMachineImage#on_host_maintenance}

---

##### `OnInstanceStopAction`<sup>Optional</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.onInstanceStopAction"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction OnInstanceStopAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#on_instance_stop_action GoogleComputeInstanceFromMachineImage#on_instance_stop_action}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.preemptible"></a>

```csharp
public object Preemptible { get; set; }
```

- *Type:* object

Whether the instance is preemptible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#preemptible GoogleComputeInstanceFromMachineImage#preemptible}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; set; }
```

- *Type:* string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#provisioning_model GoogleComputeInstanceFromMachineImage#provisioning_model}

---

### GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#seconds GoogleComputeInstanceFromMachineImage#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nanos GoogleComputeInstanceFromMachineImage#nanos}

---

### GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration <a name="GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#seconds GoogleComputeInstanceFromMachineImage#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#nanos GoogleComputeInstanceFromMachineImage#nanos}

---

### GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities <a name="GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities {
    string Key,
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#operator GoogleComputeInstanceFromMachineImage#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#key GoogleComputeInstanceFromMachineImage#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#operator GoogleComputeInstanceFromMachineImage#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinities.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#values GoogleComputeInstanceFromMachineImage#values}.

---

### GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction <a name="GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction {
    object DiscardLocalSsd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `DiscardLocalSsd`<sup>Optional</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; set; }
```

- *Type:* object

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#discard_local_ssd GoogleComputeInstanceFromMachineImage#discard_local_ssd}

---

### GoogleComputeInstanceFromMachineImageScratchDisk <a name="GoogleComputeInstanceFromMachineImageScratchDisk" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageScratchDisk {

};
```


### GoogleComputeInstanceFromMachineImageServiceAccount <a name="GoogleComputeInstanceFromMachineImageServiceAccount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageServiceAccount {
    string[] Scopes,
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.scopes">Scopes</a></code> | <code>string[]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.email">Email</a></code> | <code>string</code> | The service account e-mail address. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

A list of service scopes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#scopes GoogleComputeInstanceFromMachineImage#scopes}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The service account e-mail address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#email GoogleComputeInstanceFromMachineImage#email}

---

### GoogleComputeInstanceFromMachineImageShieldedInstanceConfig <a name="GoogleComputeInstanceFromMachineImageShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Whether integrity monitoring is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Whether secure boot is enabled for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Whether the instance uses vTPM. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Whether integrity monitoring is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_integrity_monitoring GoogleComputeInstanceFromMachineImage#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Whether secure boot is enabled for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_secure_boot GoogleComputeInstanceFromMachineImage#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Whether the instance uses vTPM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#enable_vtpm GoogleComputeInstanceFromMachineImage#enable_vtpm}

---

### GoogleComputeInstanceFromMachineImageTimeouts <a name="GoogleComputeInstanceFromMachineImageTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#create GoogleComputeInstanceFromMachineImage#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#delete GoogleComputeInstanceFromMachineImage#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#update GoogleComputeInstanceFromMachineImage#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#create GoogleComputeInstanceFromMachineImage#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#delete GoogleComputeInstanceFromMachineImage#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_compute_instance_from_machine_image#update GoogleComputeInstanceFromMachineImage#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference <a name="GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">ResetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">ResetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetTurboMode">ResetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">ResetVisibleCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```csharp
private void ResetEnableNestedVirtualization()
```

##### `ResetEnableUefiNetworking` <a name="ResetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```csharp
private void ResetEnableUefiNetworking()
```

##### `ResetPerformanceMonitoringUnit` <a name="ResetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```csharp
private void ResetPerformanceMonitoringUnit()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```

##### `ResetTurboMode` <a name="ResetTurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```csharp
private void ResetTurboMode()
```

##### `ResetVisibleCoreCount` <a name="ResetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```csharp
private void ResetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">EnableUefiNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">PerformanceMonitoringUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboModeInput">TurboModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">VisibleCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboMode">TurboMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```csharp
public object EnableNestedVirtualizationInput { get; }
```

- *Type:* object

---

##### `EnableUefiNetworkingInput`<sup>Optional</sup> <a name="EnableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```csharp
public object EnableUefiNetworkingInput { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnitInput`<sup>Optional</sup> <a name="PerformanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```csharp
public string PerformanceMonitoringUnitInput { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `TurboModeInput`<sup>Optional</sup> <a name="TurboModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```csharp
public string TurboModeInput { get; }
```

- *Type:* string

---

##### `VisibleCoreCountInput`<sup>Optional</sup> <a name="VisibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```csharp
public double VisibleCoreCountInput { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; }
```

- *Type:* object

---

##### `EnableUefiNetworking`<sup>Required</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnit`<sup>Required</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; }
```

- *Type:* string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `TurboMode`<sup>Required</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```csharp
public string TurboMode { get; }
```

- *Type:* string

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures">GoogleComputeInstanceFromMachineImageAdvancedMachineFeatures</a>

---


### GoogleComputeInstanceFromMachineImageAttachedDiskList <a name="GoogleComputeInstanceFromMachineImageAttachedDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageAttachedDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference <a name="GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk">GoogleComputeInstanceFromMachineImageAttachedDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.diskEncryptionKeySha256"></a>

```csharp
public string DiskEncryptionKeySha256 { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDiskOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageAttachedDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageAttachedDisk">GoogleComputeInstanceFromMachineImageAttachedDisk</a>

---


### GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList <a name="GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference <a name="GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams">GoogleComputeInstanceFromMachineImageBootDiskInitializeParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.enableConfidentialCompute"></a>

```csharp
public IResolvable EnableConfidentialCompute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; }
```

- *Type:* double

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.provisionedThroughput"></a>

```csharp
public double ProvisionedThroughput { get; }
```

- *Type:* double

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public StringMap ResourceManagerTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageBootDiskInitializeParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParams">GoogleComputeInstanceFromMachineImageBootDiskInitializeParams</a>

---


### GoogleComputeInstanceFromMachineImageBootDiskList <a name="GoogleComputeInstanceFromMachineImageBootDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageBootDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageBootDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceFromMachineImageBootDiskOutputReference <a name="GoogleComputeInstanceFromMachineImageBootDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageBootDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeyRaw">DiskEncryptionKeyRaw</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeySha256">DiskEncryptionKeySha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList">GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk">GoogleComputeInstanceFromMachineImageBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.autoDelete"></a>

```csharp
public IResolvable AutoDelete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyRaw`<sup>Required</sup> <a name="DiskEncryptionKeyRaw" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeyRaw"></a>

```csharp
public string DiskEncryptionKeyRaw { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeySha256`<sup>Required</sup> <a name="DiskEncryptionKeySha256" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.diskEncryptionKeySha256"></a>

```csharp
public string DiskEncryptionKeySha256 { get; }
```

- *Type:* string

---

##### `InitializeParams`<sup>Required</sup> <a name="InitializeParams" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.initializeParams"></a>

```csharp
public GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList InitializeParams { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList">GoogleComputeInstanceFromMachineImageBootDiskInitializeParamsList</a>

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDiskOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageBootDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageBootDisk">GoogleComputeInstanceFromMachineImageBootDisk</a>

---


### GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">ResetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidentialInstanceType` <a name="ResetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```csharp
private void ResetConfidentialInstanceType()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```csharp
private void ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">ConfidentialInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidentialInstanceTypeInput`<sup>Optional</sup> <a name="ConfidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```csharp
public string ConfidentialInstanceTypeInput { get; }
```

- *Type:* string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```csharp
public object EnableConfidentialComputeInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceType`<sup>Required</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; }
```

- *Type:* string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig">GoogleComputeInstanceFromMachineImageConfidentialInstanceConfig</a>

---


### GoogleComputeInstanceFromMachineImageGuestAcceleratorList <a name="GoogleComputeInstanceFromMachineImageGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageGuestAcceleratorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference <a name="GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageGuestAcceleratorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNatIp">ResetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNatIp` <a name="ResetNatIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```csharp
private void ResetNatIp()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```csharp
private void ResetNetworkTier()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.resetPublicPtrDomainName"></a>

```csharp
private void ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIpInput">NatIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `NatIpInput`<sup>Optional</sup> <a name="NatIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```csharp
public string NatIpInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```csharp
public string PublicPtrDomainNameInput { get; }
```

- *Type:* string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```csharp
public string NatIp { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">ResetSubnetworkRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetworkRangeName` <a name="ResetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```csharp
private void ResetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">SubnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `SubnetworkRangeNameInput`<sup>Optional</sup> <a name="SubnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```csharp
public string SubnetworkRangeNameInput { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6">ResetExternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength">ResetExternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName">ResetPublicPtrDomainName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalIpv6` <a name="ResetExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6"></a>

```csharp
private void ResetExternalIpv6()
```

##### `ResetExternalIpv6PrefixLength` <a name="ResetExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetExternalIpv6PrefixLength"></a>

```csharp
private void ResetExternalIpv6PrefixLength()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPublicPtrDomainName` <a name="ResetPublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.resetPublicPtrDomainName"></a>

```csharp
private void ResetPublicPtrDomainName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input">ExternalIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput">ExternalIpv6PrefixLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput">PublicPtrDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `ExternalIpv6Input`<sup>Optional</sup> <a name="ExternalIpv6Input" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6Input"></a>

```csharp
public string ExternalIpv6Input { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="ExternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLengthInput"></a>

```csharp
public string ExternalIpv6PrefixLengthInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `PublicPtrDomainNameInput`<sup>Optional</sup> <a name="PublicPtrDomainNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainNameInput"></a>

```csharp
public string PublicPtrDomainNameInput { get; }
```

- *Type:* string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```csharp
public string ExternalIpv6 { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```csharp
public string ExternalIpv6PrefixLength { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceList <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAliasIpRange">PutAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putIpv6AccessConfig">PutIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAliasIpRange">ResetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">ResetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6AccessConfig">ResetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkIp">ResetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetworkProject">ResetSubnetworkProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAccessConfig"></a>

```csharp
private void PutAccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* object

---

##### `PutAliasIpRange` <a name="PutAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAliasIpRange"></a>

```csharp
private void PutAliasIpRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* object

---

##### `PutIpv6AccessConfig` <a name="PutIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```csharp
private void PutIpv6AccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetAliasIpRange` <a name="ResetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```csharp
private void ResetAliasIpRange()
```

##### `ResetInternalIpv6PrefixLength` <a name="ResetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```csharp
private void ResetInternalIpv6PrefixLength()
```

##### `ResetIpv6AccessConfig` <a name="ResetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```csharp
private void ResetIpv6AccessConfig()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```

##### `ResetNetworkIp` <a name="ResetNetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNetworkIp"></a>

```csharp
private void ResetNetworkIp()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetQueueCount"></a>

```csharp
private void ResetQueueCount()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetStackType"></a>

```csharp
private void ResetStackType()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetSubnetworkProject` <a name="ResetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```csharp
private void ResetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRangeInput">AliasIpRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">InternalIpv6PrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">Ipv6AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIpInput">NetworkIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackTypeInput">StackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProjectInput">SubnetworkProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList AliasIpRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList">GoogleComputeInstanceFromMachineImageNetworkInterfaceAliasIpRangeList</a>

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList Ipv6AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList">GoogleComputeInstanceFromMachineImageNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```csharp
public object AccessConfigInput { get; }
```

- *Type:* object

---

##### `AliasIpRangeInput`<sup>Optional</sup> <a name="AliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```csharp
public object AliasIpRangeInput { get; }
```

- *Type:* object

---

##### `InternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="InternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```csharp
public double InternalIpv6PrefixLengthInput { get; }
```

- *Type:* double

---

##### `Ipv6AccessConfigInput`<sup>Optional</sup> <a name="Ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```csharp
public object Ipv6AccessConfigInput { get; }
```

- *Type:* object

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkIpInput`<sup>Optional</sup> <a name="NetworkIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIpInput"></a>

```csharp
public string NetworkIpInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCountInput"></a>

```csharp
public double QueueCountInput { get; }
```

- *Type:* double

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```csharp
public string StackTypeInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkProjectInput`<sup>Optional</sup> <a name="SubnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```csharp
public string SubnetworkProjectInput { get; }
```

- *Type:* string

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; }
```

- *Type:* double

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.networkIp"></a>

```csharp
public string NetworkIp { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.queueCount"></a>

```csharp
public double QueueCount { get; }
```

- *Type:* double

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.stackType"></a>

```csharp
public string StackType { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">TotalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTierInput`<sup>Optional</sup> <a name="TotalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```csharp
public string TotalEgressBandwidthTierInput { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig">GoogleComputeInstanceFromMachineImageNetworkPerformanceConfig</a>

---


### GoogleComputeInstanceFromMachineImageParamsOutputReference <a name="GoogleComputeInstanceFromMachineImageParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageParams">GoogleComputeInstanceFromMachineImageParams</a>

---


### GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference <a name="GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resetSpecificReservation">ResetSpecificReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.putSpecificReservation"></a>

```csharp
private void PutSpecificReservation(GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

---

##### `ResetSpecificReservation` <a name="ResetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.resetSpecificReservation"></a>

```csharp
private void ResetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservation"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference SpecificReservation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.specificReservationInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation SpecificReservationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinity">GoogleComputeInstanceFromMachineImageReservationAffinity</a>

---


### GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation">GoogleComputeInstanceFromMachineImageReservationAffinitySpecificReservation</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList <a name="GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">ResetDiscardLocalSsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiscardLocalSsd` <a name="ResetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```csharp
private void ResetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">DiscardLocalSsdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiscardLocalSsdInput`<sup>Optional</sup> <a name="DiscardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```csharp
public object DiscardLocalSsdInput { get; }
```

- *Type:* object

---

##### `DiscardLocalSsd`<sup>Required</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

---


### GoogleComputeInstanceFromMachineImageSchedulingOutputReference <a name="GoogleComputeInstanceFromMachineImageSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putLocalSsdRecoveryTimeout">PutLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putMaxRunDuration">PutMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putNodeAffinities">PutNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putOnInstanceStopAction">PutOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAutomaticRestart">ResetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetHostErrorTimeoutSeconds">ResetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetInstanceTerminationAction">ResetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetLocalSsdRecoveryTimeout">ResetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaxRunDuration">ResetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMinNodeCpus">ResetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetNodeAffinities">ResetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnHostMaintenance">ResetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnInstanceStopAction">ResetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalSsdRecoveryTimeout` <a name="PutLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```csharp
private void PutLocalSsdRecoveryTimeout(GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

---

##### `PutMaxRunDuration` <a name="PutMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putMaxRunDuration"></a>

```csharp
private void PutMaxRunDuration(GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

---

##### `PutNodeAffinities` <a name="PutNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putNodeAffinities"></a>

```csharp
private void PutNodeAffinities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* object

---

##### `PutOnInstanceStopAction` <a name="PutOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putOnInstanceStopAction"></a>

```csharp
private void PutOnInstanceStopAction(GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

---

##### `ResetAutomaticRestart` <a name="ResetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAutomaticRestart"></a>

```csharp
private void ResetAutomaticRestart()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetHostErrorTimeoutSeconds` <a name="ResetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```csharp
private void ResetHostErrorTimeoutSeconds()
```

##### `ResetInstanceTerminationAction` <a name="ResetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetInstanceTerminationAction"></a>

```csharp
private void ResetInstanceTerminationAction()
```

##### `ResetLocalSsdRecoveryTimeout` <a name="ResetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```csharp
private void ResetLocalSsdRecoveryTimeout()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaintenanceInterval"></a>

```csharp
private void ResetMaintenanceInterval()
```

##### `ResetMaxRunDuration` <a name="ResetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMaxRunDuration"></a>

```csharp
private void ResetMaxRunDuration()
```

##### `ResetMinNodeCpus` <a name="ResetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetMinNodeCpus"></a>

```csharp
private void ResetMinNodeCpus()
```

##### `ResetNodeAffinities` <a name="ResetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetNodeAffinities"></a>

```csharp
private void ResetNodeAffinities()
```

##### `ResetOnHostMaintenance` <a name="ResetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnHostMaintenance"></a>

```csharp
private void ResetOnHostMaintenance()
```

##### `ResetOnInstanceStopAction` <a name="ResetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetOnInstanceStopAction"></a>

```csharp
private void ResetOnInstanceStopAction()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetPreemptible"></a>

```csharp
private void ResetPreemptible()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.resetProvisioningModel"></a>

```csharp
private void ResetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestartInput">AutomaticRestartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">HostErrorTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationActionInput">InstanceTerminationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">LocalSsdRecoveryTimeoutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDurationInput">MaxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpusInput">MinNodeCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinitiesInput">NodeAffinitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenanceInput">OnHostMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopActionInput">OnInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference LocalSsdRecoveryTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeoutOutputReference</a>

---

##### `MaxRunDuration`<sup>Required</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDuration"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference MaxRunDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDurationOutputReference</a>

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinities"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList NodeAffinities { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList">GoogleComputeInstanceFromMachineImageSchedulingNodeAffinitiesList</a>

---

##### `OnInstanceStopAction`<sup>Required</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopAction"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference OnInstanceStopAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopActionOutputReference</a>

---

##### `AutomaticRestartInput`<sup>Optional</sup> <a name="AutomaticRestartInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestartInput"></a>

```csharp
public object AutomaticRestartInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomainInput"></a>

```csharp
public double AvailabilityDomainInput { get; }
```

- *Type:* double

---

##### `HostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="HostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```csharp
public double HostErrorTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `InstanceTerminationActionInput`<sup>Optional</sup> <a name="InstanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```csharp
public string InstanceTerminationActionInput { get; }
```

- *Type:* string

---

##### `LocalSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout LocalSsdRecoveryTimeoutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout">GoogleComputeInstanceFromMachineImageSchedulingLocalSsdRecoveryTimeout</a>

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```csharp
public string MaintenanceIntervalInput { get; }
```

- *Type:* string

---

##### `MaxRunDurationInput`<sup>Optional</sup> <a name="MaxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maxRunDurationInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration MaxRunDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration">GoogleComputeInstanceFromMachineImageSchedulingMaxRunDuration</a>

---

##### `MinNodeCpusInput`<sup>Optional</sup> <a name="MinNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpusInput"></a>

```csharp
public double MinNodeCpusInput { get; }
```

- *Type:* double

---

##### `NodeAffinitiesInput`<sup>Optional</sup> <a name="NodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```csharp
public object NodeAffinitiesInput { get; }
```

- *Type:* object

---

##### `OnHostMaintenanceInput`<sup>Optional</sup> <a name="OnHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```csharp
public string OnHostMaintenanceInput { get; }
```

- *Type:* string

---

##### `OnInstanceStopActionInput`<sup>Optional</sup> <a name="OnInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```csharp
public GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction OnInstanceStopActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction">GoogleComputeInstanceFromMachineImageSchedulingOnInstanceStopAction</a>

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptibleInput"></a>

```csharp
public object PreemptibleInput { get; }
```

- *Type:* object

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModelInput"></a>

```csharp
public string ProvisioningModelInput { get; }
```

- *Type:* string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; }
```

- *Type:* double

---

##### `HostErrorTimeoutSeconds`<sup>Required</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```csharp
public double HostErrorTimeoutSeconds { get; }
```

- *Type:* double

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; }
```

- *Type:* string

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; }
```

- *Type:* string

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; }
```

- *Type:* double

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; }
```

- *Type:* string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.preemptible"></a>

```csharp
public object Preemptible { get; }
```

- *Type:* object

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageSchedulingOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScheduling">GoogleComputeInstanceFromMachineImageScheduling</a>

---


### GoogleComputeInstanceFromMachineImageScratchDiskList <a name="GoogleComputeInstanceFromMachineImageScratchDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageScratchDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.get"></a>

```csharp
private GoogleComputeInstanceFromMachineImageScratchDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceFromMachineImageScratchDiskOutputReference <a name="GoogleComputeInstanceFromMachineImageScratchDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageScratchDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk">GoogleComputeInstanceFromMachineImageScratchDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDiskOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageScratchDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageScratchDisk">GoogleComputeInstanceFromMachineImageScratchDisk</a>

---


### GoogleComputeInstanceFromMachineImageServiceAccountOutputReference <a name="GoogleComputeInstanceFromMachineImageServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccountOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageServiceAccount">GoogleComputeInstanceFromMachineImageServiceAccount</a>

---


### GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference <a name="GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceFromMachineImageShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageShieldedInstanceConfig">GoogleComputeInstanceFromMachineImageShieldedInstanceConfig</a>

---


### GoogleComputeInstanceFromMachineImageTimeoutsOutputReference <a name="GoogleComputeInstanceFromMachineImageTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceFromMachineImageTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceFromMachineImage.GoogleComputeInstanceFromMachineImageTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



