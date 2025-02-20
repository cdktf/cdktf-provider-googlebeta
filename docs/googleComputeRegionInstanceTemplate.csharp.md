# `googleComputeRegionInstanceTemplate` Submodule <a name="`googleComputeRegionInstanceTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionInstanceTemplate <a name="GoogleComputeRegionInstanceTemplate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template google_compute_region_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplate(Construct Scope, string Id, GoogleComputeRegionInstanceTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig">GoogleComputeRegionInstanceTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig">GoogleComputeRegionInstanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putAdvancedMachineFeatures">PutAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putConfidentialInstanceConfig">PutConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putDisk">PutDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putGuestAccelerator">PutGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkInterface">PutNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkPerformanceConfig">PutNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putServiceAccount">PutServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetAdvancedMachineFeatures">ResetAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetCanIpForward">ResetCanIpForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetConfidentialInstanceConfig">ResetConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetEnableDisplay">ResetEnableDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetGuestAccelerator">ResetGuestAccelerator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetInstanceDescription">ResetInstanceDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetKeyRevocationActionType">ResetKeyRevocationActionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadataStartupScript">ResetMetadataStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMinCpuPlatform">ResetMinCpuPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkInterface">ResetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkPerformanceConfig">ResetNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetPartnerMetadata">ResetPartnerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedMachineFeatures` <a name="PutAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putAdvancedMachineFeatures"></a>

```csharp
private void PutAdvancedMachineFeatures(GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putAdvancedMachineFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `PutConfidentialInstanceConfig` <a name="PutConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putConfidentialInstanceConfig"></a>

```csharp
private void PutConfidentialInstanceConfig(GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putConfidentialInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `PutDisk` <a name="PutDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putDisk"></a>

```csharp
private void PutDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putDisk.parameter.value"></a>

- *Type:* object

---

##### `PutGuestAccelerator` <a name="PutGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putGuestAccelerator"></a>

```csharp
private void PutGuestAccelerator(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putGuestAccelerator.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkInterface` <a name="PutNetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkInterface"></a>

```csharp
private void PutNetworkInterface(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkInterface.parameter.value"></a>

- *Type:* object

---

##### `PutNetworkPerformanceConfig` <a name="PutNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkPerformanceConfig"></a>

```csharp
private void PutNetworkPerformanceConfig(GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putNetworkPerformanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(GoogleComputeRegionInstanceTemplateReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putScheduling"></a>

```csharp
private void PutScheduling(GoogleComputeRegionInstanceTemplateScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

---

##### `PutServiceAccount` <a name="PutServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putServiceAccount"></a>

```csharp
private void PutServiceAccount(GoogleComputeRegionInstanceTemplateServiceAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putServiceAccount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(GoogleComputeRegionInstanceTemplateShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRegionInstanceTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a>

---

##### `ResetAdvancedMachineFeatures` <a name="ResetAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetAdvancedMachineFeatures"></a>

```csharp
private void ResetAdvancedMachineFeatures()
```

##### `ResetCanIpForward` <a name="ResetCanIpForward" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetCanIpForward"></a>

```csharp
private void ResetCanIpForward()
```

##### `ResetConfidentialInstanceConfig` <a name="ResetConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetConfidentialInstanceConfig"></a>

```csharp
private void ResetConfidentialInstanceConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableDisplay` <a name="ResetEnableDisplay" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetEnableDisplay"></a>

```csharp
private void ResetEnableDisplay()
```

##### `ResetGuestAccelerator` <a name="ResetGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetGuestAccelerator"></a>

```csharp
private void ResetGuestAccelerator()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceDescription` <a name="ResetInstanceDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetInstanceDescription"></a>

```csharp
private void ResetInstanceDescription()
```

##### `ResetKeyRevocationActionType` <a name="ResetKeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetKeyRevocationActionType"></a>

```csharp
private void ResetKeyRevocationActionType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetMetadataStartupScript` <a name="ResetMetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMetadataStartupScript"></a>

```csharp
private void ResetMetadataStartupScript()
```

##### `ResetMinCpuPlatform` <a name="ResetMinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetMinCpuPlatform"></a>

```csharp
private void ResetMinCpuPlatform()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNamePrefix"></a>

```csharp
private void ResetNamePrefix()
```

##### `ResetNetworkInterface` <a name="ResetNetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkInterface"></a>

```csharp
private void ResetNetworkInterface()
```

##### `ResetNetworkPerformanceConfig` <a name="ResetNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetNetworkPerformanceConfig"></a>

```csharp
private void ResetNetworkPerformanceConfig()
```

##### `ResetPartnerMetadata` <a name="ResetPartnerMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetPartnerMetadata"></a>

```csharp
private void ResetPartnerMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeRegionInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionInstanceTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList">GoogleComputeRegionInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList">GoogleComputeRegionInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList">GoogleComputeRegionInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference">GoogleComputeRegionInstanceTemplateServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsFingerprint">TagsFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference">GoogleComputeRegionInstanceTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput">AdvancedMachineFeaturesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForwardInput">CanIpForwardInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput">ConfidentialInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.diskInput">DiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplayInput">EnableDisplayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAcceleratorInput">GuestAcceleratorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescriptionInput">InstanceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionTypeInput">KeyRevocationActionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScriptInput">MetadataStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatformInput">MinCpuPlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefixInput">NamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterfaceInput">NetworkInterfaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfigInput">NetworkPerformanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadataInput">PartnerMetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccountInput">ServiceAccountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForward">CanIpForward</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescription">InstanceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefix">NamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadata">PartnerMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeatures"></a>

```csharp
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference AdvancedMachineFeatures { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference">GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference</a>

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference ConfidentialInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.disk"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskList Disk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList">GoogleComputeRegionInstanceTemplateDiskList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAccelerator"></a>

```csharp
public GoogleComputeRegionInstanceTemplateGuestAcceleratorList GuestAccelerator { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList">GoogleComputeRegionInstanceTemplateGuestAcceleratorList</a>

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataFingerprint"></a>

```csharp
public string MetadataFingerprint { get; }
```

- *Type:* string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterface"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkInterfaceList NetworkInterface { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList">GoogleComputeRegionInstanceTemplateNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference NetworkPerformanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference</a>

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinity"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.scheduling"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccount"></a>

```csharp
public GoogleComputeRegionInstanceTemplateServiceAccountOutputReference ServiceAccount { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference">GoogleComputeRegionInstanceTemplateServiceAccountOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference">GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference</a>

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsFingerprint"></a>

```csharp
public string TagsFingerprint { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeouts"></a>

```csharp
public GoogleComputeRegionInstanceTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference">GoogleComputeRegionInstanceTemplateTimeoutsOutputReference</a>

---

##### `AdvancedMachineFeaturesInput`<sup>Optional</sup> <a name="AdvancedMachineFeaturesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.advancedMachineFeaturesInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures AdvancedMachineFeaturesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---

##### `CanIpForwardInput`<sup>Optional</sup> <a name="CanIpForwardInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForwardInput"></a>

```csharp
public object CanIpForwardInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceConfigInput`<sup>Optional</sup> <a name="ConfidentialInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.confidentialInstanceConfigInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig ConfidentialInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskInput`<sup>Optional</sup> <a name="DiskInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.diskInput"></a>

```csharp
public object DiskInput { get; }
```

- *Type:* object

---

##### `EnableDisplayInput`<sup>Optional</sup> <a name="EnableDisplayInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplayInput"></a>

```csharp
public object EnableDisplayInput { get; }
```

- *Type:* object

---

##### `GuestAcceleratorInput`<sup>Optional</sup> <a name="GuestAcceleratorInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.guestAcceleratorInput"></a>

```csharp
public object GuestAcceleratorInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceDescriptionInput`<sup>Optional</sup> <a name="InstanceDescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescriptionInput"></a>

```csharp
public string InstanceDescriptionInput { get; }
```

- *Type:* string

---

##### `KeyRevocationActionTypeInput`<sup>Optional</sup> <a name="KeyRevocationActionTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionTypeInput"></a>

```csharp
public string KeyRevocationActionTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScriptInput`<sup>Optional</sup> <a name="MetadataStartupScriptInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScriptInput"></a>

```csharp
public string MetadataStartupScriptInput { get; }
```

- *Type:* string

---

##### `MinCpuPlatformInput`<sup>Optional</sup> <a name="MinCpuPlatformInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatformInput"></a>

```csharp
public string MinCpuPlatformInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefixInput"></a>

```csharp
public string NamePrefixInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceInput`<sup>Optional</sup> <a name="NetworkInterfaceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkInterfaceInput"></a>

```csharp
public object NetworkInterfaceInput { get; }
```

- *Type:* object

---

##### `NetworkPerformanceConfigInput`<sup>Optional</sup> <a name="NetworkPerformanceConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.networkPerformanceConfigInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig NetworkPerformanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---

##### `PartnerMetadataInput`<sup>Optional</sup> <a name="PartnerMetadataInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.reservationAffinityInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.schedulingInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.serviceAccountInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateServiceAccount ServiceAccountInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.shieldedInstanceConfigInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.canIpForward"></a>

```csharp
public object CanIpForward { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnableDisplay`<sup>Required</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceDescription`<sup>Required</sup> <a name="InstanceDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.instanceDescription"></a>

```csharp
public string InstanceDescription { get; }
```

- *Type:* string

---

##### `KeyRevocationActionType`<sup>Required</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; }
```

- *Type:* string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.namePrefix"></a>

```csharp
public string NamePrefix { get; }
```

- *Type:* string

---

##### `PartnerMetadata`<sup>Required</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.partnerMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures <a name="GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures {
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | Whether to enable nested virtualization or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | Whether to enable UEFI networking or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | The PMU is a hardware component within the CPU core that monitors how the processor runs code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | The number of threads per physical core. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.turboMode">TurboMode</a></code> | <code>string</code> | Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | The number of physical cores to expose to an instance. |

---

##### `EnableNestedVirtualization`<sup>Optional</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; set; }
```

- *Type:* object

Whether to enable nested virtualization or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enable_nested_virtualization GoogleComputeRegionInstanceTemplate#enable_nested_virtualization}

---

##### `EnableUefiNetworking`<sup>Optional</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; set; }
```

- *Type:* object

Whether to enable UEFI networking or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enable_uefi_networking GoogleComputeRegionInstanceTemplate#enable_uefi_networking}

---

##### `PerformanceMonitoringUnit`<sup>Optional</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; set; }
```

- *Type:* string

The PMU is a hardware component within the CPU core that monitors how the processor runs code.

Valid values for the level of PMU are "STANDARD", "ENHANCED", and "ARCHITECTURAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#performance_monitoring_unit GoogleComputeRegionInstanceTemplate#performance_monitoring_unit}

---

##### `ThreadsPerCore`<sup>Optional</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; set; }
```

- *Type:* double

The number of threads per physical core.

To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#threads_per_core GoogleComputeRegionInstanceTemplate#threads_per_core}

---

##### `TurboMode`<sup>Optional</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.turboMode"></a>

```csharp
public string TurboMode { get; set; }
```

- *Type:* string

Turbo frequency mode to use for the instance. Currently supported modes is "ALL_CORE_MAX".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#turbo_mode GoogleComputeRegionInstanceTemplate#turbo_mode}

---

##### `VisibleCoreCount`<sup>Optional</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; set; }
```

- *Type:* double

The number of physical cores to expose to an instance.

Multiply by the number of threads per core to compute the total number of virtual CPUs to expose to the instance. If unset, the number of cores is inferred from the instance's nominal CPU count and the underlying platform's SMT width.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#visible_core_count GoogleComputeRegionInstanceTemplate#visible_core_count}

---

### GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig <a name="GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig {
    string ConfidentialInstanceType = null,
    object EnableConfidentialCompute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | The confidential computing technology the instance uses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release. |

---

##### `ConfidentialInstanceType`<sup>Optional</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; set; }
```

- *Type:* string

The confidential computing technology the instance uses.

SEV is an AMD feature. TDX is an Intel feature. One of the following
values is required: SEV, SEV_SNP, TDX. If SEV_SNP, min_cpu_platform =
"AMD Milan" is currently required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#confidential_instance_type GoogleComputeRegionInstanceTemplate#confidential_instance_type}

---

##### `EnableConfidentialCompute`<sup>Optional</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; set; }
```

- *Type:* object

Defines whether the instance should have confidential compute enabled. Field will be deprecated in a future release.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enable_confidential_compute GoogleComputeRegionInstanceTemplate#enable_confidential_compute}

---

### GoogleComputeRegionInstanceTemplateConfig <a name="GoogleComputeRegionInstanceTemplateConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Disk,
    string MachineType,
    GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures AdvancedMachineFeatures = null,
    object CanIpForward = null,
    GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig ConfidentialInstanceConfig = null,
    string Description = null,
    object EnableDisplay = null,
    object GuestAccelerator = null,
    string Id = null,
    string InstanceDescription = null,
    string KeyRevocationActionType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string MetadataStartupScript = null,
    string MinCpuPlatform = null,
    string Name = null,
    string NamePrefix = null,
    object NetworkInterface = null,
    GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig NetworkPerformanceConfig = null,
    System.Collections.Generic.IDictionary<string, string> PartnerMetadata = null,
    string Project = null,
    string Region = null,
    GoogleComputeRegionInstanceTemplateReservationAffinity ReservationAffinity = null,
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null,
    string[] ResourcePolicies = null,
    GoogleComputeRegionInstanceTemplateScheduling Scheduling = null,
    GoogleComputeRegionInstanceTemplateServiceAccount ServiceAccount = null,
    GoogleComputeRegionInstanceTemplateShieldedInstanceConfig ShieldedInstanceConfig = null,
    string[] Tags = null,
    GoogleComputeRegionInstanceTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.disk">Disk</a></code> | <code>object</code> | disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.machineType">MachineType</a></code> | <code>string</code> | The machine type to create. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | advanced_machine_features block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.canIpForward">CanIpForward</a></code> | <code>object</code> | Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | confidential_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.description">Description</a></code> | <code>string</code> | A brief description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.enableDisplay">EnableDisplay</a></code> | <code>object</code> | Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.guestAccelerator">GuestAccelerator</a></code> | <code>object</code> | guest_accelerator block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#id GoogleComputeRegionInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.instanceDescription">InstanceDescription</a></code> | <code>string</code> | A description of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>string</code> | Action to be taken when a customer's encryption key is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to instances created from this template,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata key/value pairs to make available from within instances created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>string</code> | An alternative to using the startup-script metadata key, mostly to match the compute_instance resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>string</code> | Specifies a minimum CPU platform. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.namePrefix">NamePrefix</a></code> | <code>string</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkInterface">NetworkInterface</a></code> | <code>object</code> | network_interface block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | network_performance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.partnerMetadata">PartnerMetadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Partner Metadata Map made available within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.region">Region</a></code> | <code>string</code> | The region in which the instance template is located. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | A list of self_links of resource policies to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a></code> | service_account block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags to attach to the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.disk"></a>

```csharp
public object Disk { get; set; }
```

- *Type:* object

disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#disk GoogleComputeRegionInstanceTemplate#disk}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The machine type to create.

To create a machine with a custom type (such as extended memory), format the value like custom-VCPUS-MEM_IN_MB like custom-6-20480 for 6 vCPU and 20GB of RAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#machine_type GoogleComputeRegionInstanceTemplate#machine_type}

---

##### `AdvancedMachineFeatures`<sup>Optional</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.advancedMachineFeatures"></a>

```csharp
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures AdvancedMachineFeatures { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

advanced_machine_features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#advanced_machine_features GoogleComputeRegionInstanceTemplate#advanced_machine_features}

---

##### `CanIpForward`<sup>Optional</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.canIpForward"></a>

```csharp
public object CanIpForward { get; set; }
```

- *Type:* object

Whether to allow sending and receiving of packets with non-matching source or destination IPs. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#can_ip_forward GoogleComputeRegionInstanceTemplate#can_ip_forward}

---

##### `ConfidentialInstanceConfig`<sup>Optional</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.confidentialInstanceConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig ConfidentialInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

confidential_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#confidential_instance_config GoogleComputeRegionInstanceTemplate#confidential_instance_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#description GoogleComputeRegionInstanceTemplate#description}

---

##### `EnableDisplay`<sup>Optional</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.enableDisplay"></a>

```csharp
public object EnableDisplay { get; set; }
```

- *Type:* object

Enable Virtual Displays on this instance. Note: allow_stopping_for_update must be set to true in order to update this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enable_display GoogleComputeRegionInstanceTemplate#enable_display}

---

##### `GuestAccelerator`<sup>Optional</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.guestAccelerator"></a>

```csharp
public object GuestAccelerator { get; set; }
```

- *Type:* object

guest_accelerator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#guest_accelerator GoogleComputeRegionInstanceTemplate#guest_accelerator}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#id GoogleComputeRegionInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceDescription`<sup>Optional</sup> <a name="InstanceDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.instanceDescription"></a>

```csharp
public string InstanceDescription { get; set; }
```

- *Type:* string

A description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#instance_description GoogleComputeRegionInstanceTemplate#instance_description}

---

##### `KeyRevocationActionType`<sup>Optional</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.keyRevocationActionType"></a>

```csharp
public string KeyRevocationActionType { get; set; }
```

- *Type:* string

Action to be taken when a customer's encryption key is revoked.

Supports "STOP" and "NONE", with "NONE" being the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#key_revocation_action_type GoogleComputeRegionInstanceTemplate#key_revocation_action_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to instances created from this template,.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#labels GoogleComputeRegionInstanceTemplate#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata key/value pairs to make available from within instances created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#metadata GoogleComputeRegionInstanceTemplate#metadata}

---

##### `MetadataStartupScript`<sup>Optional</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.metadataStartupScript"></a>

```csharp
public string MetadataStartupScript { get; set; }
```

- *Type:* string

An alternative to using the startup-script metadata key, mostly to match the compute_instance resource.

This replaces the startup-script metadata key on the created instance and thus the two mechanisms are not allowed to be used simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#metadata_startup_script GoogleComputeRegionInstanceTemplate#metadata_startup_script}

---

##### `MinCpuPlatform`<sup>Optional</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.minCpuPlatform"></a>

```csharp
public string MinCpuPlatform { get; set; }
```

- *Type:* string

Specifies a minimum CPU platform.

Applicable values are the friendly names of CPU platforms, such as Intel Haswell or Intel Skylake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#min_cpu_platform GoogleComputeRegionInstanceTemplate#min_cpu_platform}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#name GoogleComputeRegionInstanceTemplate#name}

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.namePrefix"></a>

```csharp
public string NamePrefix { get; set; }
```

- *Type:* string

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#name_prefix GoogleComputeRegionInstanceTemplate#name_prefix}

---

##### `NetworkInterface`<sup>Optional</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkInterface"></a>

```csharp
public object NetworkInterface { get; set; }
```

- *Type:* object

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#network_interface GoogleComputeRegionInstanceTemplate#network_interface}

---

##### `NetworkPerformanceConfig`<sup>Optional</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.networkPerformanceConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig NetworkPerformanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

network_performance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#network_performance_config GoogleComputeRegionInstanceTemplate#network_performance_config}

---

##### `PartnerMetadata`<sup>Optional</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.partnerMetadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PartnerMetadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Partner Metadata Map made available within the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#partner_metadata GoogleComputeRegionInstanceTemplate#partner_metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#project GoogleComputeRegionInstanceTemplate#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region in which the instance template is located. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#region GoogleComputeRegionInstanceTemplate#region}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.reservationAffinity"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#reservation_affinity GoogleComputeRegionInstanceTemplate#reservation_affinity}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#resource_manager_tags GoogleComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

A list of self_links of resource policies to attach to the instance.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#resource_policies GoogleComputeRegionInstanceTemplate#resource_policies}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.scheduling"></a>

```csharp
public GoogleComputeRegionInstanceTemplateScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#scheduling GoogleComputeRegionInstanceTemplate#scheduling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.serviceAccount"></a>

```csharp
public GoogleComputeRegionInstanceTemplateServiceAccount ServiceAccount { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#service_account GoogleComputeRegionInstanceTemplate#service_account}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.shieldedInstanceConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#shielded_instance_config GoogleComputeRegionInstanceTemplate#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags to attach to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#tags GoogleComputeRegionInstanceTemplate#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfig.property.timeouts"></a>

```csharp
public GoogleComputeRegionInstanceTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts">GoogleComputeRegionInstanceTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#timeouts GoogleComputeRegionInstanceTemplate#timeouts}

---

### GoogleComputeRegionInstanceTemplateDisk <a name="GoogleComputeRegionInstanceTemplateDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDisk {
    object AutoDelete = null,
    object Boot = null,
    string DeviceName = null,
    GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey DiskEncryptionKey = null,
    string DiskName = null,
    double DiskSizeGb = null,
    string DiskType = null,
    string Interface = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Mode = null,
    double ProvisionedIops = null,
    double ProvisionedThroughput = null,
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null,
    string[] ResourcePolicies = null,
    string Source = null,
    string SourceImage = null,
    GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey SourceImageEncryptionKey = null,
    string SourceSnapshot = null,
    GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey SourceSnapshotEncryptionKey = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.autoDelete">AutoDelete</a></code> | <code>object</code> | Whether or not the disk should be auto-deleted. This defaults to true. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.boot">Boot</a></code> | <code>object</code> | Indicates that this is a boot disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | disk_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskName">DiskName</a></code> | <code>string</code> | Name of the disk. When not provided, this defaults to the name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | The size of the image in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskType">DiskType</a></code> | <code>string</code> | The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.interface">Interface</a></code> | <code>string</code> | Specifies the disk interface to use for attaching this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to disks,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.mode">Mode</a></code> | <code>string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | Indicates how many IOPS to provision for the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>double</code> | Indicates how much throughput to provision for the disk, in MB/s. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | A list (short name or id) of resource policies to attach to this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.source">Source</a></code> | <code>string</code> | The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImage">SourceImage</a></code> | <code>string</code> | The image from which to initialize this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | source_image_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | The source snapshot to create this disk. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | source_snapshot_encryption_key block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.type">Type</a></code> | <code>string</code> | The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT". |

---

##### `AutoDelete`<sup>Optional</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.autoDelete"></a>

```csharp
public object AutoDelete { get; set; }
```

- *Type:* object

Whether or not the disk should be auto-deleted. This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#auto_delete GoogleComputeRegionInstanceTemplate#auto_delete}

---

##### `Boot`<sup>Optional</sup> <a name="Boot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.boot"></a>

```csharp
public object Boot { get; set; }
```

- *Type:* object

Indicates that this is a boot disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#boot GoogleComputeRegionInstanceTemplate#boot}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

A unique device name that is reflected into the /dev/ tree of a Linux operating system running within the instance.

If not specified, the server chooses a default device name to apply to this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#device_name GoogleComputeRegionInstanceTemplate#device_name}

---

##### `DiskEncryptionKey`<sup>Optional</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskEncryptionKey"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey DiskEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

disk_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#disk_encryption_key GoogleComputeRegionInstanceTemplate#disk_encryption_key}

---

##### `DiskName`<sup>Optional</sup> <a name="DiskName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskName"></a>

```csharp
public string DiskName { get; set; }
```

- *Type:* string

Name of the disk. When not provided, this defaults to the name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#disk_name GoogleComputeRegionInstanceTemplate#disk_name}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

The size of the image in gigabytes.

If not specified, it will inherit the size of its base image. For SCRATCH disks, the size must be one of 375 or 3000 GB, with a default of 375 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#disk_size_gb GoogleComputeRegionInstanceTemplate#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

The Google Compute Engine disk type. Such as "pd-ssd", "local-ssd", "pd-balanced" or "pd-standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#disk_type GoogleComputeRegionInstanceTemplate#disk_type}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

Specifies the disk interface to use for attaching this disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#interface GoogleComputeRegionInstanceTemplate#interface}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to disks,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#labels GoogleComputeRegionInstanceTemplate#labels}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If you are attaching or creating a boot disk, this must read-write mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#mode GoogleComputeRegionInstanceTemplate#mode}

---

##### `ProvisionedIops`<sup>Optional</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; set; }
```

- *Type:* double

Indicates how many IOPS to provision for the disk.

This sets the number of I/O operations per second that the disk can handle. For more details, see the [Extreme persistent disk documentation](https://cloud.google.com/compute/docs/disks/extreme-persistent-disk) or the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks) depending on the selected disk_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#provisioned_iops GoogleComputeRegionInstanceTemplate#provisioned_iops}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.provisionedThroughput"></a>

```csharp
public double ProvisionedThroughput { get; set; }
```

- *Type:* double

Indicates how much throughput to provision for the disk, in MB/s.

This sets the amount of data that can be read or written from the disk per second. Values must greater than or equal to 1. For more details, see the [Hyperdisk documentation](https://cloud.google.com/compute/docs/disks/hyperdisks).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#provisioned_throughput GoogleComputeRegionInstanceTemplate#provisioned_throughput}

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#resource_manager_tags GoogleComputeRegionInstanceTemplate#resource_manager_tags}

---

##### `ResourcePolicies`<sup>Optional</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; set; }
```

- *Type:* string[]

A list (short name or id) of resource policies to attach to this disk.

Currently a max of 1 resource policy is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#resource_policies GoogleComputeRegionInstanceTemplate#resource_policies}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The name (not self_link) of the disk (such as those managed by google_compute_disk) to attach.

~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#source GoogleComputeRegionInstanceTemplate#source}

---

##### `SourceImage`<sup>Optional</sup> <a name="SourceImage" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImage"></a>

```csharp
public string SourceImage { get; set; }
```

- *Type:* string

The image from which to initialize this disk.

This can be one of: the image's self_link, projects/{project}/global/images/{image}, projects/{project}/global/images/family/{family}, global/images/{image}, global/images/family/{family}, family/{family}, {project}/{family}, {project}/{image}, {family}, or {image}. ~> Note: Either source or source_image is required when creating a new instance except for when creating a local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#source_image GoogleComputeRegionInstanceTemplate#source_image}

---

##### `SourceImageEncryptionKey`<sup>Optional</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceImageEncryptionKey"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey SourceImageEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

source_image_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#source_image_encryption_key GoogleComputeRegionInstanceTemplate#source_image_encryption_key}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; set; }
```

- *Type:* string

The source snapshot to create this disk.

When creating
a new instance, one of initializeParams.sourceSnapshot,
initializeParams.sourceImage, or disks.source is
required except for local SSD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#source_snapshot GoogleComputeRegionInstanceTemplate#source_snapshot}

---

##### `SourceSnapshotEncryptionKey`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.sourceSnapshotEncryptionKey"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey SourceSnapshotEncryptionKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

source_snapshot_encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#source_snapshot_encryption_key GoogleComputeRegionInstanceTemplate#source_snapshot_encryption_key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDisk.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of Google Compute Engine disk, can be either "SCRATCH" or "PERSISTENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#type GoogleComputeRegionInstanceTemplate#type}

---

### GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey <a name="GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey {
    string KmsKeySelfLink
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#kms_key_self_link GoogleComputeRegionInstanceTemplate#kms_key_self_link}

---

### GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey <a name="GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey {
    string KmsKeySelfLink,
    string KmsKeyServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#kms_key_self_link GoogleComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#kms_key_service_account GoogleComputeRegionInstanceTemplate#kms_key_service_account}

---

### GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey {
    string KmsKeySelfLink,
    string KmsKeyServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | The self link of the encryption key that is stored in Google Cloud KMS. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | The service account being used for the encryption request for the given KMS key. |

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; set; }
```

- *Type:* string

The self link of the encryption key that is stored in Google Cloud KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#kms_key_self_link GoogleComputeRegionInstanceTemplate#kms_key_self_link}

---

##### `KmsKeyServiceAccount`<sup>Optional</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; set; }
```

- *Type:* string

The service account being used for the encryption request for the given KMS key.

If absent, the Compute
Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#kms_key_service_account GoogleComputeRegionInstanceTemplate#kms_key_service_account}

---

### GoogleComputeRegionInstanceTemplateGuestAccelerator <a name="GoogleComputeRegionInstanceTemplateGuestAccelerator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateGuestAccelerator {
    double Count,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.count">Count</a></code> | <code>double</code> | The number of the guest accelerator cards exposed to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.type">Type</a></code> | <code>string</code> | The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of the guest accelerator cards exposed to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#count GoogleComputeRegionInstanceTemplate#count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAccelerator.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The accelerator type resource to expose to this instance. E.g. nvidia-tesla-k80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#type GoogleComputeRegionInstanceTemplate#type}

---

### GoogleComputeRegionInstanceTemplateNetworkInterface <a name="GoogleComputeRegionInstanceTemplateNetworkInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterface {
    object AccessConfig = null,
    object AliasIpRange = null,
    double InternalIpv6PrefixLength = null,
    object Ipv6AccessConfig = null,
    string Ipv6Address = null,
    string Network = null,
    string NetworkIp = null,
    string NicType = null,
    double QueueCount = null,
    string StackType = null,
    string Subnetwork = null,
    string SubnetworkProject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.accessConfig">AccessConfig</a></code> | <code>object</code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange">AliasIpRange</a></code> | <code>object</code> | alias_ip_range block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | The prefix length of the primary internal IPv6 range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code>object</code> | ipv6_access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | An IPv6 internal network address for this network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.network">Network</a></code> | <code>string</code> | The name or self_link of the network to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.networkIp">NetworkIp</a></code> | <code>string</code> | The private IP address to assign to the instance. If empty, the address will be automatically assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.nicType">NicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.queueCount">QueueCount</a></code> | <code>double</code> | The networking queue count that's specified by users for the network interface. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.stackType">StackType</a></code> | <code>string</code> | The stack type for this network interface to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name of the subnetwork to attach this interface to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | The ID of the project in which the subnetwork belongs. |

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.accessConfig"></a>

```csharp
public object AccessConfig { get; set; }
```

- *Type:* object

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#access_config GoogleComputeRegionInstanceTemplate#access_config}

---

##### `AliasIpRange`<sup>Optional</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.aliasIpRange"></a>

```csharp
public object AliasIpRange { get; set; }
```

- *Type:* object

alias_ip_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#alias_ip_range GoogleComputeRegionInstanceTemplate#alias_ip_range}

---

##### `InternalIpv6PrefixLength`<sup>Optional</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; set; }
```

- *Type:* double

The prefix length of the primary internal IPv6 range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#internal_ipv6_prefix_length GoogleComputeRegionInstanceTemplate#internal_ipv6_prefix_length}

---

##### `Ipv6AccessConfig`<sup>Optional</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6AccessConfig"></a>

```csharp
public object Ipv6AccessConfig { get; set; }
```

- *Type:* object

ipv6_access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#ipv6_access_config GoogleComputeRegionInstanceTemplate#ipv6_access_config}

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; set; }
```

- *Type:* string

An IPv6 internal network address for this network interface.

If not specified, Google Cloud will automatically assign an internal IPv6 address from the instance's subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#ipv6_address GoogleComputeRegionInstanceTemplate#ipv6_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name or self_link of the network to attach this interface to.

Use network attribute for Legacy or Auto subnetted networks and subnetwork for custom subnetted networks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#network GoogleComputeRegionInstanceTemplate#network}

---

##### `NetworkIp`<sup>Optional</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.networkIp"></a>

```csharp
public string NetworkIp { get; set; }
```

- *Type:* string

The private IP address to assign to the instance. If empty, the address will be automatically assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#network_ip GoogleComputeRegionInstanceTemplate#network_ip}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

The type of vNIC to be used on this interface. Possible values:GVNIC, VIRTIO_NET, MRDMA, and IRDMA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#nic_type GoogleComputeRegionInstanceTemplate#nic_type}

---

##### `QueueCount`<sup>Optional</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.queueCount"></a>

```csharp
public double QueueCount { get; set; }
```

- *Type:* double

The networking queue count that's specified by users for the network interface.

Both Rx and Tx queues will be set to this number. It will be empty if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#queue_count GoogleComputeRegionInstanceTemplate#queue_count}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.stackType"></a>

```csharp
public string StackType { get; set; }
```

- *Type:* string

The stack type for this network interface to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#stack_type GoogleComputeRegionInstanceTemplate#stack_type}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name of the subnetwork to attach this interface to.

The subnetwork must exist in the same region this instance will be created in. Either network or subnetwork must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#subnetwork GoogleComputeRegionInstanceTemplate#subnetwork}

---

##### `SubnetworkProject`<sup>Optional</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterface.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; set; }
```

- *Type:* string

The ID of the project in which the subnetwork belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#subnetwork_project GoogleComputeRegionInstanceTemplate#subnetwork_project}

---

### GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig {
    string NatIp = null,
    string NetworkTier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp">NatIp</a></code> | <code>string</code> | The IP address that will be 1:1 mapped to the instance's network ip. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The networking tier used for configuring this instance template. |

---

##### `NatIp`<sup>Optional</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.natIp"></a>

```csharp
public string NatIp { get; set; }
```

- *Type:* string

The IP address that will be 1:1 mapped to the instance's network ip.

If not given, one will be generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#nat_ip GoogleComputeRegionInstanceTemplate#nat_ip}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The networking tier used for configuring this instance template.

This field can take the following values: PREMIUM, STANDARD, FIXED_STANDARD. If this field is not specified, it is assumed to be PREMIUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#network_tier GoogleComputeRegionInstanceTemplate#network_tier}

---

### GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange {
    string IpCidrRange,
    string SubnetworkRangeName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | The IP CIDR range represented by this alias IP range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. |

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; set; }
```

- *Type:* string

The IP CIDR range represented by this alias IP range.

This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses reserved by system or used by other network interfaces. At the time of writing only a netmask (e.g. /24) may be supplied, with a CIDR format resulting in an API error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#ip_cidr_range GoogleComputeRegionInstanceTemplate#ip_cidr_range}

---

##### `SubnetworkRangeName`<sup>Optional</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRange.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; set; }
```

- *Type:* string

The subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range.

If left unspecified, the primary range of the subnetwork will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#subnetwork_range_name GoogleComputeRegionInstanceTemplate#subnetwork_range_name}

---

### GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig {
    string NetworkTier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | The service-level to be provided for IPv6 traffic when the subnet has an external subnet. |

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

The service-level to be provided for IPv6 traffic when the subnet has an external subnet.

Only PREMIUM tier is valid for IPv6

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#network_tier GoogleComputeRegionInstanceTemplate#network_tier}

---

### GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig <a name="GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig {
    string TotalEgressBandwidthTier
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT. |

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; set; }
```

- *Type:* string

The egress bandwidth tier to enable. Possible values:TIER_1, DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#total_egress_bandwidth_tier GoogleComputeRegionInstanceTemplate#total_egress_bandwidth_tier}

---

### GoogleComputeRegionInstanceTemplateReservationAffinity <a name="GoogleComputeRegionInstanceTemplateReservationAffinity" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateReservationAffinity {
    string Type,
    GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation SpecificReservation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.type">Type</a></code> | <code>string</code> | The type of reservation from which this instance can consume resources. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | specific_reservation block. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of reservation from which this instance can consume resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#type GoogleComputeRegionInstanceTemplate#type}

---

##### `SpecificReservation`<sup>Optional</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity.property.specificReservation"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation SpecificReservation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

specific_reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#specific_reservation GoogleComputeRegionInstanceTemplate#specific_reservation}

---

### GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation <a name="GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of a reservation resource.

To target a SPECIFIC_RESERVATION by name, specify compute.googleapis.com/reservation-name as the key and specify the name of your reservation as the only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#key GoogleComputeRegionInstanceTemplate#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#values GoogleComputeRegionInstanceTemplate#values}

---

### GoogleComputeRegionInstanceTemplateScheduling <a name="GoogleComputeRegionInstanceTemplateScheduling" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateScheduling {
    object AutomaticRestart = null,
    double AvailabilityDomain = null,
    GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown GracefulShutdown = null,
    double HostErrorTimeoutSeconds = null,
    string InstanceTerminationAction = null,
    object LocalSsdRecoveryTimeout = null,
    string MaintenanceInterval = null,
    GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration MaxRunDuration = null,
    double MinNodeCpus = null,
    object NodeAffinities = null,
    string OnHostMaintenance = null,
    GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction OnInstanceStopAction = null,
    object Preemptible = null,
    string ProvisioningModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | Specifies the availability domain, which this instance should be scheduled on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.gracefulShutdown">GracefulShutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a></code> | graceful_shutdown block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>double</code> | Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | Specifies the action GCE should take when SPOT VM is preempted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code>object</code> | local_ssd_recovery_timeout block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | max_run_duration block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | Minimum number of cpus for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.nodeAffinities">NodeAffinities</a></code> | <code>object</code> | node_affinities block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | Defines the maintenance behavior for this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | on_instance_stop_action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.preemptible">Preemptible</a></code> | <code>object</code> | Allows instance to be preempted. This defaults to false. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | Whether the instance is spot. If this is set as SPOT. |

---

##### `AutomaticRestart`<sup>Optional</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; set; }
```

- *Type:* object

Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user).

This defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#automatic_restart GoogleComputeRegionInstanceTemplate#automatic_restart}

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; set; }
```

- *Type:* double

Specifies the availability domain, which this instance should be scheduled on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#availability_domain GoogleComputeRegionInstanceTemplate#availability_domain}

---

##### `GracefulShutdown`<sup>Optional</sup> <a name="GracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.gracefulShutdown"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown GracefulShutdown { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

graceful_shutdown block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#graceful_shutdown GoogleComputeRegionInstanceTemplate#graceful_shutdown}

---

##### `HostErrorTimeoutSeconds`<sup>Optional</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.hostErrorTimeoutSeconds"></a>

```csharp
public double HostErrorTimeoutSeconds { get; set; }
```

- *Type:* double

Specify the time in seconds for host error detection, the value must be within the range of [90, 330] with the increment of 30, if unset, the default behavior of host error recovery will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#host_error_timeout_seconds GoogleComputeRegionInstanceTemplate#host_error_timeout_seconds}

---

##### `InstanceTerminationAction`<sup>Optional</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; set; }
```

- *Type:* string

Specifies the action GCE should take when SPOT VM is preempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#instance_termination_action GoogleComputeRegionInstanceTemplate#instance_termination_action}

---

##### `LocalSsdRecoveryTimeout`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.localSsdRecoveryTimeout"></a>

```csharp
public object LocalSsdRecoveryTimeout { get; set; }
```

- *Type:* object

local_ssd_recovery_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#local_ssd_recovery_timeout GoogleComputeRegionInstanceTemplate#local_ssd_recovery_timeout}

---

##### `MaintenanceInterval`<sup>Optional</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; set; }
```

- *Type:* string

Specifies the frequency of planned maintenance events. The accepted values are: PERIODIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#maintenance_interval GoogleComputeRegionInstanceTemplate#maintenance_interval}

---

##### `MaxRunDuration`<sup>Optional</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.maxRunDuration"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration MaxRunDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

max_run_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#max_run_duration GoogleComputeRegionInstanceTemplate#max_run_duration}

---

##### `MinNodeCpus`<sup>Optional</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; set; }
```

- *Type:* double

Minimum number of cpus for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#min_node_cpus GoogleComputeRegionInstanceTemplate#min_node_cpus}

---

##### `NodeAffinities`<sup>Optional</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.nodeAffinities"></a>

```csharp
public object NodeAffinities { get; set; }
```

- *Type:* object

node_affinities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#node_affinities GoogleComputeRegionInstanceTemplate#node_affinities}

---

##### `OnHostMaintenance`<sup>Optional</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; set; }
```

- *Type:* string

Defines the maintenance behavior for this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#on_host_maintenance GoogleComputeRegionInstanceTemplate#on_host_maintenance}

---

##### `OnInstanceStopAction`<sup>Optional</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.onInstanceStopAction"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction OnInstanceStopAction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

on_instance_stop_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#on_instance_stop_action GoogleComputeRegionInstanceTemplate#on_instance_stop_action}

---

##### `Preemptible`<sup>Optional</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.preemptible"></a>

```csharp
public object Preemptible { get; set; }
```

- *Type:* object

Allows instance to be preempted. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#preemptible GoogleComputeRegionInstanceTemplate#preemptible}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; set; }
```

- *Type:* string

Whether the instance is spot. If this is set as SPOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#provisioning_model GoogleComputeRegionInstanceTemplate#provisioning_model}

---

### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown {
    object Enabled,
    GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration MaxDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.enabled">Enabled</a></code> | <code>object</code> | Opts-in for graceful shutdown. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.maxDuration">MaxDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | max_duration block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Opts-in for graceful shutdown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enabled GoogleComputeRegionInstanceTemplate#enabled}

---

##### `MaxDuration`<sup>Optional</sup> <a name="MaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown.property.maxDuration"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration MaxDuration { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

max_duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#max_duration GoogleComputeRegionInstanceTemplate#max_duration}

---

### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond 													resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second.

The value must be between 1 and 3600, which is 3,600 seconds (one hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#seconds GoogleComputeRegionInstanceTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond 													resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#nanos GoogleComputeRegionInstanceTemplate#nanos}

---

### GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#seconds GoogleComputeRegionInstanceTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeout.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#nanos GoogleComputeRegionInstanceTemplate#nanos}

---

### GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration <a name="GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration {
    double Seconds,
    double Nanos = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.seconds">Seconds</a></code> | <code>double</code> | Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.nanos">Nanos</a></code> | <code>double</code> | Span of time that's a fraction of a second at nanosecond resolution. |

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Span of time at a resolution of a second. Must be from 0 to 315,576,000,000 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#seconds GoogleComputeRegionInstanceTemplate#seconds}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Span of time that's a fraction of a second at nanosecond resolution.

Durations less than one second are represented
with a 0 seconds field and a positive nanos field. Must
be from 0 to 999,999,999 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#nanos GoogleComputeRegionInstanceTemplate#nanos}

---

### GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities <a name="GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities {
    string Key,
    string Operator,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#key GoogleComputeRegionInstanceTemplate#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator">Operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#operator GoogleComputeRegionInstanceTemplate#operator}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#values GoogleComputeRegionInstanceTemplate#values}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#key GoogleComputeRegionInstanceTemplate#key}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#operator GoogleComputeRegionInstanceTemplate#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinities.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#values GoogleComputeRegionInstanceTemplate#values}.

---

### GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction <a name="GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction {
    object DiscardLocalSsd = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | If true, the contents of any attached Local SSD disks will be discarded. |

---

##### `DiscardLocalSsd`<sup>Optional</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; set; }
```

- *Type:* object

If true, the contents of any attached Local SSD disks will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#discard_local_ssd GoogleComputeRegionInstanceTemplate#discard_local_ssd}

---

### GoogleComputeRegionInstanceTemplateServiceAccount <a name="GoogleComputeRegionInstanceTemplateServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateServiceAccount {
    string[] Scopes,
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.scopes">Scopes</a></code> | <code>string[]</code> | A list of service scopes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.email">Email</a></code> | <code>string</code> | The service account e-mail address. If not given, the default Google Compute Engine service account is used. |

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

A list of service scopes.

Both OAuth2 URLs and gcloud short names are supported. To allow full access to all Cloud APIs, use the cloud-platform scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#scopes GoogleComputeRegionInstanceTemplate#scopes}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The service account e-mail address. If not given, the default Google Compute Engine service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#email GoogleComputeRegionInstanceTemplate#email}

---

### GoogleComputeRegionInstanceTemplateShieldedInstanceConfig <a name="GoogleComputeRegionInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Verify the digital signature of all boot components, and halt the boot process if signature verification fails. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enable_integrity_monitoring GoogleComputeRegionInstanceTemplate#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Verify the digital signature of all boot components, and halt the boot process if signature verification fails.

Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enable_secure_boot GoogleComputeRegionInstanceTemplate#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#enable_vtpm GoogleComputeRegionInstanceTemplate#enable_vtpm}

---

### GoogleComputeRegionInstanceTemplateTimeouts <a name="GoogleComputeRegionInstanceTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#create GoogleComputeRegionInstanceTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#delete GoogleComputeRegionInstanceTemplate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#create GoogleComputeRegionInstanceTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_region_instance_template#delete GoogleComputeRegionInstanceTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization">ResetEnableNestedVirtualization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking">ResetEnableUefiNetworking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit">ResetPerformanceMonitoringUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore">ResetThreadsPerCore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode">ResetTurboMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount">ResetVisibleCoreCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableNestedVirtualization` <a name="ResetEnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableNestedVirtualization"></a>

```csharp
private void ResetEnableNestedVirtualization()
```

##### `ResetEnableUefiNetworking` <a name="ResetEnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetEnableUefiNetworking"></a>

```csharp
private void ResetEnableUefiNetworking()
```

##### `ResetPerformanceMonitoringUnit` <a name="ResetPerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetPerformanceMonitoringUnit"></a>

```csharp
private void ResetPerformanceMonitoringUnit()
```

##### `ResetThreadsPerCore` <a name="ResetThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetThreadsPerCore"></a>

```csharp
private void ResetThreadsPerCore()
```

##### `ResetTurboMode` <a name="ResetTurboMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetTurboMode"></a>

```csharp
private void ResetTurboMode()
```

##### `ResetVisibleCoreCount` <a name="ResetVisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.resetVisibleCoreCount"></a>

```csharp
private void ResetVisibleCoreCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput">EnableNestedVirtualizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput">EnableUefiNetworkingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput">PerformanceMonitoringUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput">ThreadsPerCoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput">TurboModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput">VisibleCoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">TurboMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableNestedVirtualizationInput`<sup>Optional</sup> <a name="EnableNestedVirtualizationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualizationInput"></a>

```csharp
public object EnableNestedVirtualizationInput { get; }
```

- *Type:* object

---

##### `EnableUefiNetworkingInput`<sup>Optional</sup> <a name="EnableUefiNetworkingInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworkingInput"></a>

```csharp
public object EnableUefiNetworkingInput { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnitInput`<sup>Optional</sup> <a name="PerformanceMonitoringUnitInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnitInput"></a>

```csharp
public string PerformanceMonitoringUnitInput { get; }
```

- *Type:* string

---

##### `ThreadsPerCoreInput`<sup>Optional</sup> <a name="ThreadsPerCoreInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCoreInput"></a>

```csharp
public double ThreadsPerCoreInput { get; }
```

- *Type:* double

---

##### `TurboModeInput`<sup>Optional</sup> <a name="TurboModeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboModeInput"></a>

```csharp
public string TurboModeInput { get; }
```

- *Type:* string

---

##### `VisibleCoreCountInput`<sup>Optional</sup> <a name="VisibleCoreCountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCountInput"></a>

```csharp
public double VisibleCoreCountInput { get; }
```

- *Type:* double

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```csharp
public object EnableNestedVirtualization { get; }
```

- *Type:* object

---

##### `EnableUefiNetworking`<sup>Required</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```csharp
public object EnableUefiNetworking { get; }
```

- *Type:* object

---

##### `PerformanceMonitoringUnit`<sup>Required</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```csharp
public string PerformanceMonitoringUnit { get; }
```

- *Type:* string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```csharp
public double ThreadsPerCore { get; }
```

- *Type:* double

---

##### `TurboMode`<sup>Required</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```csharp
public string TurboMode { get; }
```

- *Type:* string

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```csharp
public double VisibleCoreCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures">GoogleComputeRegionInstanceTemplateAdvancedMachineFeatures</a>

---


### GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType">ResetConfidentialInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute">ResetEnableConfidentialCompute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidentialInstanceType` <a name="ResetConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetConfidentialInstanceType"></a>

```csharp
private void ResetConfidentialInstanceType()
```

##### `ResetEnableConfidentialCompute` <a name="ResetEnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.resetEnableConfidentialCompute"></a>

```csharp
private void ResetEnableConfidentialCompute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput">ConfidentialInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput">EnableConfidentialComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidentialInstanceTypeInput`<sup>Optional</sup> <a name="ConfidentialInstanceTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceTypeInput"></a>

```csharp
public string ConfidentialInstanceTypeInput { get; }
```

- *Type:* string

---

##### `EnableConfidentialComputeInput`<sup>Optional</sup> <a name="EnableConfidentialComputeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialComputeInput"></a>

```csharp
public object EnableConfidentialComputeInput { get; }
```

- *Type:* object

---

##### `ConfidentialInstanceType`<sup>Required</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```csharp
public string ConfidentialInstanceType { get; }
```

- *Type:* string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```csharp
public object EnableConfidentialCompute { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig">GoogleComputeRegionInstanceTemplateConfidentialInstanceConfig</a>

---


### GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---


### GoogleComputeRegionInstanceTemplateDiskList <a name="GoogleComputeRegionInstanceTemplateDiskList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateDiskOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey">PutDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey">PutSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey">PutSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete">ResetAutoDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetBoot">ResetBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey">ResetDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskName">ResetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops">ResetProvisionedIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies">ResetResourcePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage">ResetSourceImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey">ResetSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey">ResetSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskEncryptionKey` <a name="PutDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey"></a>

```csharp
private void PutDiskEncryptionKey(GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putDiskEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `PutSourceImageEncryptionKey` <a name="PutSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey"></a>

```csharp
private void PutSourceImageEncryptionKey(GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceImageEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `PutSourceSnapshotEncryptionKey` <a name="PutSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey"></a>

```csharp
private void PutSourceSnapshotEncryptionKey(GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.putSourceSnapshotEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `ResetAutoDelete` <a name="ResetAutoDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetAutoDelete"></a>

```csharp
private void ResetAutoDelete()
```

##### `ResetBoot` <a name="ResetBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetBoot"></a>

```csharp
private void ResetBoot()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDeviceName"></a>

```csharp
private void ResetDeviceName()
```

##### `ResetDiskEncryptionKey` <a name="ResetDiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskEncryptionKey"></a>

```csharp
private void ResetDiskEncryptionKey()
```

##### `ResetDiskName` <a name="ResetDiskName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskName"></a>

```csharp
private void ResetDiskName()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProvisionedIops` <a name="ResetProvisionedIops" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedIops"></a>

```csharp
private void ResetProvisionedIops()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetProvisionedThroughput"></a>

```csharp
private void ResetProvisionedThroughput()
```

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```

##### `ResetResourcePolicies` <a name="ResetResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetResourcePolicies"></a>

```csharp
private void ResetResourcePolicies()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetSourceImage` <a name="ResetSourceImage" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImage"></a>

```csharp
private void ResetSourceImage()
```

##### `ResetSourceImageEncryptionKey` <a name="ResetSourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceImageEncryptionKey"></a>

```csharp
private void ResetSourceImageEncryptionKey()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshot"></a>

```csharp
private void ResetSourceSnapshot()
```

##### `ResetSourceSnapshotEncryptionKey` <a name="ResetSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetSourceSnapshotEncryptionKey"></a>

```csharp
private void ResetSourceSnapshotEncryptionKey()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput">AutoDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.bootInput">BootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput">DiskEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput">DiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput">ProvisionedIopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput">ResourcePoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput">SourceImageEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput">SourceImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput">SourceSnapshotEncryptionKeyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot">Boot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName">DiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage">SourceImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference DiskEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKeyOutputReference</a>

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference SourceImageEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference</a>

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference SourceSnapshotEncryptionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference</a>

---

##### `AutoDeleteInput`<sup>Optional</sup> <a name="AutoDeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDeleteInput"></a>

```csharp
public object AutoDeleteInput { get; }
```

- *Type:* object

---

##### `BootInput`<sup>Optional</sup> <a name="BootInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.bootInput"></a>

```csharp
public object BootInput { get; }
```

- *Type:* object

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionKeyInput`<sup>Optional</sup> <a name="DiskEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskEncryptionKeyInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey DiskEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey">GoogleComputeRegionInstanceTemplateDiskDiskEncryptionKey</a>

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskNameInput"></a>

```csharp
public string DiskNameInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ProvisionedIopsInput`<sup>Optional</sup> <a name="ProvisionedIopsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIopsInput"></a>

```csharp
public double ProvisionedIopsInput { get; }
```

- *Type:* double

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughputInput"></a>

```csharp
public double ProvisionedThroughputInput { get; }
```

- *Type:* double

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePoliciesInput`<sup>Optional</sup> <a name="ResourcePoliciesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePoliciesInput"></a>

```csharp
public string[] ResourcePoliciesInput { get; }
```

- *Type:* string[]

---

##### `SourceImageEncryptionKeyInput`<sup>Optional</sup> <a name="SourceImageEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKeyInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey SourceImageEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---

##### `SourceImageInput`<sup>Optional</sup> <a name="SourceImageInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImageInput"></a>

```csharp
public string SourceImageInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `SourceSnapshotEncryptionKeyInput`<sup>Optional</sup> <a name="SourceSnapshotEncryptionKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKeyInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey SourceSnapshotEncryptionKeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshotInput"></a>

```csharp
public string SourceSnapshotInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```csharp
public object AutoDelete { get; }
```

- *Type:* object

---

##### `Boot`<sup>Required</sup> <a name="Boot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.boot"></a>

```csharp
public object Boot { get; }
```

- *Type:* object

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskName"></a>

```csharp
public string DiskName { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```csharp
public double ProvisionedIops { get; }
```

- *Type:* double

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```csharp
public double ProvisionedThroughput { get; }
```

- *Type:* double

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```csharp
public string[] ResourcePolicies { get; }
```

- *Type:* string[]

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```csharp
public string SourceImage { get; }
```

- *Type:* string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```csharp
public string SourceSnapshot { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount">ResetKmsKeyServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyServiceAccount` <a name="ResetKmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resetKmsKeyServiceAccount"></a>

```csharp
private void ResetKmsKeyServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput">KmsKeySelfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput">KmsKeyServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeySelfLinkInput`<sup>Optional</sup> <a name="KmsKeySelfLinkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLinkInput"></a>

```csharp
public string KmsKeySelfLinkInput { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccountInput`<sup>Optional</sup> <a name="KmsKeyServiceAccountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccountInput"></a>

```csharp
public string KmsKeyServiceAccountInput { get; }
```

- *Type:* string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```csharp
public string KmsKeySelfLink { get; }
```

- *Type:* string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```csharp
public string KmsKeyServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey">GoogleComputeRegionInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### GoogleComputeRegionInstanceTemplateGuestAcceleratorList <a name="GoogleComputeRegionInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateGuestAcceleratorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference <a name="GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp">ResetNatIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNatIp` <a name="ResetNatIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNatIp"></a>

```csharp
private void ResetNatIp()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resetNetworkTier"></a>

```csharp
private void ResetNetworkTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput">NatIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `NatIpInput`<sup>Optional</sup> <a name="NatIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIpInput"></a>

```csharp
public string NatIpInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```csharp
public string NatIp { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName">ResetSubnetworkRangeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetworkRangeName` <a name="ResetSubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resetSubnetworkRangeName"></a>

```csharp
private void ResetSubnetworkRangeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput">SubnetworkRangeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRangeInput"></a>

```csharp
public string IpCidrRangeInput { get; }
```

- *Type:* string

---

##### `SubnetworkRangeNameInput`<sup>Optional</sup> <a name="SubnetworkRangeNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeNameInput"></a>

```csharp
public string SubnetworkRangeNameInput { get; }
```

- *Type:* string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```csharp
public string IpCidrRange { get; }
```

- *Type:* string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```csharp
public string SubnetworkRangeName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```csharp
public string ExternalIpv6 { get; }
```

- *Type:* string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```csharp
public string ExternalIpv6PrefixLength { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```csharp
public string PublicPtrDomainName { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceList <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange">PutAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig">PutIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange">ResetAliasIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength">ResetInternalIpv6PrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig">ResetIpv6AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp">ResetNetworkIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount">ResetQueueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject">ResetSubnetworkProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig"></a>

```csharp
private void PutAccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAccessConfig.parameter.value"></a>

- *Type:* object

---

##### `PutAliasIpRange` <a name="PutAliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange"></a>

```csharp
private void PutAliasIpRange(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putAliasIpRange.parameter.value"></a>

- *Type:* object

---

##### `PutIpv6AccessConfig` <a name="PutIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig"></a>

```csharp
private void PutIpv6AccessConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.putIpv6AccessConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetAliasIpRange` <a name="ResetAliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetAliasIpRange"></a>

```csharp
private void ResetAliasIpRange()
```

##### `ResetInternalIpv6PrefixLength` <a name="ResetInternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetInternalIpv6PrefixLength"></a>

```csharp
private void ResetInternalIpv6PrefixLength()
```

##### `ResetIpv6AccessConfig` <a name="ResetIpv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6AccessConfig"></a>

```csharp
private void ResetIpv6AccessConfig()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetIpv6Address"></a>

```csharp
private void ResetIpv6Address()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkIp` <a name="ResetNetworkIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNetworkIp"></a>

```csharp
private void ResetNetworkIp()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetQueueCount` <a name="ResetQueueCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetQueueCount"></a>

```csharp
private void ResetQueueCount()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetStackType"></a>

```csharp
private void ResetStackType()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetSubnetworkProject` <a name="ResetSubnetworkProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.resetSubnetworkProject"></a>

```csharp
private void ResetSubnetworkProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput">AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput">AliasIpRangeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput">InternalIpv6PrefixLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput">Ipv6AccessConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput">NetworkIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput">QueueCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput">StackTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput">SubnetworkProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList AliasIpRange { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList">GoogleComputeRegionInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList Ipv6AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList">GoogleComputeRegionInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```csharp
public string Ipv6AccessType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.accessConfigInput"></a>

```csharp
public object AccessConfigInput { get; }
```

- *Type:* object

---

##### `AliasIpRangeInput`<sup>Optional</sup> <a name="AliasIpRangeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRangeInput"></a>

```csharp
public object AliasIpRangeInput { get; }
```

- *Type:* object

---

##### `InternalIpv6PrefixLengthInput`<sup>Optional</sup> <a name="InternalIpv6PrefixLengthInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLengthInput"></a>

```csharp
public double InternalIpv6PrefixLengthInput { get; }
```

- *Type:* double

---

##### `Ipv6AccessConfigInput`<sup>Optional</sup> <a name="Ipv6AccessConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfigInput"></a>

```csharp
public object Ipv6AccessConfigInput { get; }
```

- *Type:* object

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AddressInput"></a>

```csharp
public string Ipv6AddressInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkIpInput`<sup>Optional</sup> <a name="NetworkIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIpInput"></a>

```csharp
public string NetworkIpInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `QueueCountInput`<sup>Optional</sup> <a name="QueueCountInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCountInput"></a>

```csharp
public double QueueCountInput { get; }
```

- *Type:* double

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackTypeInput"></a>

```csharp
public string StackTypeInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkProjectInput`<sup>Optional</sup> <a name="SubnetworkProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProjectInput"></a>

```csharp
public string SubnetworkProjectInput { get; }
```

- *Type:* string

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```csharp
public double InternalIpv6PrefixLength { get; }
```

- *Type:* double

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```csharp
public string Ipv6Address { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```csharp
public string NetworkIp { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```csharp
public double QueueCount { get; }
```

- *Type:* double

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```csharp
public string StackType { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```csharp
public string SubnetworkProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput">TotalEgressBandwidthTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTierInput`<sup>Optional</sup> <a name="TotalEgressBandwidthTierInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTierInput"></a>

```csharp
public string TotalEgressBandwidthTierInput { get; }
```

- *Type:* string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```csharp
public string TotalEgressBandwidthTier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig">GoogleComputeRegionInstanceTemplateNetworkPerformanceConfig</a>

---


### GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference <a name="GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation">PutSpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation">ResetSpecificReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecificReservation` <a name="PutSpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation"></a>

```csharp
private void PutSpecificReservation(GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.putSpecificReservation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `ResetSpecificReservation` <a name="ResetSpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.resetSpecificReservation"></a>

```csharp
private void ResetSpecificReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput">SpecificReservationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference SpecificReservation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference</a>

---

##### `SpecificReservationInput`<sup>Optional</sup> <a name="SpecificReservationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.specificReservationInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation SpecificReservationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinity">GoogleComputeRegionInstanceTemplateReservationAffinity</a>

---


### GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation">GoogleComputeRegionInstanceTemplateReservationAffinitySpecificReservation</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration">PutMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration">ResetMaxDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxDuration` <a name="PutMaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration"></a>

```csharp
private void PutMaxDuration(GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.putMaxDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---

##### `ResetMaxDuration` <a name="ResetMaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.resetMaxDuration"></a>

```csharp
private void ResetMaxDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration">MaxDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput">MaxDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxDuration`<sup>Required</sup> <a name="MaxDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDuration"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference MaxDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDurationOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `MaxDurationInput`<sup>Optional</sup> <a name="MaxDurationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.maxDurationInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration MaxDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownMaxDuration</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList <a name="GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```csharp
private GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd">ResetDiscardLocalSsd</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiscardLocalSsd` <a name="ResetDiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resetDiscardLocalSsd"></a>

```csharp
private void ResetDiscardLocalSsd()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput">DiscardLocalSsdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiscardLocalSsdInput`<sup>Optional</sup> <a name="DiscardLocalSsdInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsdInput"></a>

```csharp
public object DiscardLocalSsdInput { get; }
```

- *Type:* object

---

##### `DiscardLocalSsd`<sup>Required</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```csharp
public object DiscardLocalSsd { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### GoogleComputeRegionInstanceTemplateSchedulingOutputReference <a name="GoogleComputeRegionInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putGracefulShutdown">PutGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout">PutLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putMaxRunDuration">PutMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities">PutNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction">PutOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart">ResetAutomaticRestart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetGracefulShutdown">ResetGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds">ResetHostErrorTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction">ResetInstanceTerminationAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout">ResetLocalSsdRecoveryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval">ResetMaintenanceInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaxRunDuration">ResetMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus">ResetMinNodeCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities">ResetNodeAffinities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance">ResetOnHostMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction">ResetOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible">ResetPreemptible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGracefulShutdown` <a name="PutGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putGracefulShutdown"></a>

```csharp
private void PutGracefulShutdown(GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putGracefulShutdown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

---

##### `PutLocalSsdRecoveryTimeout` <a name="PutLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout"></a>

```csharp
private void PutLocalSsdRecoveryTimeout(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putLocalSsdRecoveryTimeout.parameter.value"></a>

- *Type:* object

---

##### `PutMaxRunDuration` <a name="PutMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putMaxRunDuration"></a>

```csharp
private void PutMaxRunDuration(GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putMaxRunDuration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `PutNodeAffinities` <a name="PutNodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities"></a>

```csharp
private void PutNodeAffinities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putNodeAffinities.parameter.value"></a>

- *Type:* object

---

##### `PutOnInstanceStopAction` <a name="PutOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction"></a>

```csharp
private void PutOnInstanceStopAction(GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.putOnInstanceStopAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `ResetAutomaticRestart` <a name="ResetAutomaticRestart" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAutomaticRestart"></a>

```csharp
private void ResetAutomaticRestart()
```

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetAvailabilityDomain"></a>

```csharp
private void ResetAvailabilityDomain()
```

##### `ResetGracefulShutdown` <a name="ResetGracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetGracefulShutdown"></a>

```csharp
private void ResetGracefulShutdown()
```

##### `ResetHostErrorTimeoutSeconds` <a name="ResetHostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetHostErrorTimeoutSeconds"></a>

```csharp
private void ResetHostErrorTimeoutSeconds()
```

##### `ResetInstanceTerminationAction` <a name="ResetInstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetInstanceTerminationAction"></a>

```csharp
private void ResetInstanceTerminationAction()
```

##### `ResetLocalSsdRecoveryTimeout` <a name="ResetLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetLocalSsdRecoveryTimeout"></a>

```csharp
private void ResetLocalSsdRecoveryTimeout()
```

##### `ResetMaintenanceInterval` <a name="ResetMaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaintenanceInterval"></a>

```csharp
private void ResetMaintenanceInterval()
```

##### `ResetMaxRunDuration` <a name="ResetMaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMaxRunDuration"></a>

```csharp
private void ResetMaxRunDuration()
```

##### `ResetMinNodeCpus` <a name="ResetMinNodeCpus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetMinNodeCpus"></a>

```csharp
private void ResetMinNodeCpus()
```

##### `ResetNodeAffinities` <a name="ResetNodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetNodeAffinities"></a>

```csharp
private void ResetNodeAffinities()
```

##### `ResetOnHostMaintenance` <a name="ResetOnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnHostMaintenance"></a>

```csharp
private void ResetOnHostMaintenance()
```

##### `ResetOnInstanceStopAction` <a name="ResetOnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetOnInstanceStopAction"></a>

```csharp
private void ResetOnInstanceStopAction()
```

##### `ResetPreemptible` <a name="ResetPreemptible" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetPreemptible"></a>

```csharp
private void ResetPreemptible()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.resetProvisioningModel"></a>

```csharp
private void ResetProvisioningModel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdown">GracefulShutdown</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput">AutomaticRestartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdownInput">GracefulShutdownInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput">HostErrorTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput">InstanceTerminationActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput">LocalSsdRecoveryTimeoutInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput">MaintenanceIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput">MaxRunDurationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput">MinNodeCpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput">NodeAffinitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput">OnHostMaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput">OnInstanceStopActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput">PreemptibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GracefulShutdown`<sup>Required</sup> <a name="GracefulShutdown" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdown"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference GracefulShutdown { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdownOutputReference</a>

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList LocalSsdRecoveryTimeout { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">GoogleComputeRegionInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `MaxRunDuration`<sup>Required</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference MaxRunDuration { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDurationOutputReference</a>

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList NodeAffinities { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList">GoogleComputeRegionInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `OnInstanceStopAction`<sup>Required</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference OnInstanceStopAction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopActionOutputReference</a>

---

##### `AutomaticRestartInput`<sup>Optional</sup> <a name="AutomaticRestartInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestartInput"></a>

```csharp
public object AutomaticRestartInput { get; }
```

- *Type:* object

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomainInput"></a>

```csharp
public double AvailabilityDomainInput { get; }
```

- *Type:* double

---

##### `GracefulShutdownInput`<sup>Optional</sup> <a name="GracefulShutdownInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.gracefulShutdownInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown GracefulShutdownInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown">GoogleComputeRegionInstanceTemplateSchedulingGracefulShutdown</a>

---

##### `HostErrorTimeoutSecondsInput`<sup>Optional</sup> <a name="HostErrorTimeoutSecondsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSecondsInput"></a>

```csharp
public double HostErrorTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `InstanceTerminationActionInput`<sup>Optional</sup> <a name="InstanceTerminationActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationActionInput"></a>

```csharp
public string InstanceTerminationActionInput { get; }
```

- *Type:* string

---

##### `LocalSsdRecoveryTimeoutInput`<sup>Optional</sup> <a name="LocalSsdRecoveryTimeoutInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeoutInput"></a>

```csharp
public object LocalSsdRecoveryTimeoutInput { get; }
```

- *Type:* object

---

##### `MaintenanceIntervalInput`<sup>Optional</sup> <a name="MaintenanceIntervalInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceIntervalInput"></a>

```csharp
public string MaintenanceIntervalInput { get; }
```

- *Type:* string

---

##### `MaxRunDurationInput`<sup>Optional</sup> <a name="MaxRunDurationInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maxRunDurationInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration MaxRunDurationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration">GoogleComputeRegionInstanceTemplateSchedulingMaxRunDuration</a>

---

##### `MinNodeCpusInput`<sup>Optional</sup> <a name="MinNodeCpusInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpusInput"></a>

```csharp
public double MinNodeCpusInput { get; }
```

- *Type:* double

---

##### `NodeAffinitiesInput`<sup>Optional</sup> <a name="NodeAffinitiesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.nodeAffinitiesInput"></a>

```csharp
public object NodeAffinitiesInput { get; }
```

- *Type:* object

---

##### `OnHostMaintenanceInput`<sup>Optional</sup> <a name="OnHostMaintenanceInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenanceInput"></a>

```csharp
public string OnHostMaintenanceInput { get; }
```

- *Type:* string

---

##### `OnInstanceStopActionInput`<sup>Optional</sup> <a name="OnInstanceStopActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onInstanceStopActionInput"></a>

```csharp
public GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction OnInstanceStopActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction">GoogleComputeRegionInstanceTemplateSchedulingOnInstanceStopAction</a>

---

##### `PreemptibleInput`<sup>Optional</sup> <a name="PreemptibleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptibleInput"></a>

```csharp
public object PreemptibleInput { get; }
```

- *Type:* object

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModelInput"></a>

```csharp
public string ProvisioningModelInput { get; }
```

- *Type:* string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```csharp
public object AutomaticRestart { get; }
```

- *Type:* object

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.availabilityDomain"></a>

```csharp
public double AvailabilityDomain { get; }
```

- *Type:* double

---

##### `HostErrorTimeoutSeconds`<sup>Required</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```csharp
public double HostErrorTimeoutSeconds { get; }
```

- *Type:* double

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```csharp
public string InstanceTerminationAction { get; }
```

- *Type:* string

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```csharp
public string MaintenanceInterval { get; }
```

- *Type:* string

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```csharp
public double MinNodeCpus { get; }
```

- *Type:* double

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```csharp
public string OnHostMaintenance { get; }
```

- *Type:* string

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```csharp
public object Preemptible { get; }
```

- *Type:* object

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateScheduling">GoogleComputeRegionInstanceTemplateScheduling</a>

---


### GoogleComputeRegionInstanceTemplateServiceAccountOutputReference <a name="GoogleComputeRegionInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateServiceAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateServiceAccount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateServiceAccount">GoogleComputeRegionInstanceTemplateServiceAccount</a>

---


### GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference <a name="GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceTemplateShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateShieldedInstanceConfig">GoogleComputeRegionInstanceTemplateShieldedInstanceConfig</a>

---


### GoogleComputeRegionInstanceTemplateTimeoutsOutputReference <a name="GoogleComputeRegionInstanceTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceTemplate.GoogleComputeRegionInstanceTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



