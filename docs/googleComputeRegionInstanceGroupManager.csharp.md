# `googleComputeRegionInstanceGroupManager` Submodule <a name="`googleComputeRegionInstanceGroupManager` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionInstanceGroupManager <a name="GoogleComputeRegionInstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager google_compute_region_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManager(Construct Scope, string Id, GoogleComputeRegionInstanceGroupManagerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig">GoogleComputeRegionInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig">GoogleComputeRegionInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAllInstancesConfig">PutAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAutoHealingPolicies">PutAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putInstanceFlexibilityPolicy">PutInstanceFlexibilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putInstanceLifecyclePolicy">PutInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putNamedPort">PutNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStandbyPolicy">PutStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulDisk">PutStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulExternalIp">PutStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulInternalIp">PutStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putVersion">PutVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAllInstancesConfig">ResetAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAutoHealingPolicies">ResetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape">ResetDistributionPolicyTargetShape</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyZones">ResetDistributionPolicyZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetInstanceFlexibilityPolicy">ResetInstanceFlexibilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetInstanceLifecyclePolicy">ResetInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetListManagedInstancesResults">ResetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetNamedPort">ResetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStandbyPolicy">ResetStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulDisk">ResetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulExternalIp">ResetStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulInternalIp">ResetStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetPools">ResetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetSize">ResetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetStoppedSize">ResetTargetStoppedSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetSuspendedSize">ResetTargetSuspendedSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstances">ResetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstancesStatus">ResetWaitForInstancesStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllInstancesConfig` <a name="PutAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAllInstancesConfig"></a>

```csharp
private void PutAllInstancesConfig(GoogleComputeRegionInstanceGroupManagerAllInstancesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAllInstancesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---

##### `PutAutoHealingPolicies` <a name="PutAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAutoHealingPolicies"></a>

```csharp
private void PutAutoHealingPolicies(GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `PutInstanceFlexibilityPolicy` <a name="PutInstanceFlexibilityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putInstanceFlexibilityPolicy"></a>

```csharp
private void PutInstanceFlexibilityPolicy(GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putInstanceFlexibilityPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a>

---

##### `PutInstanceLifecyclePolicy` <a name="PutInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putInstanceLifecyclePolicy"></a>

```csharp
private void PutInstanceLifecyclePolicy(GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putInstanceLifecyclePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `PutNamedPort` <a name="PutNamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putNamedPort"></a>

```csharp
private void PutNamedPort(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* object

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putParams"></a>

```csharp
private void PutParams(GoogleComputeRegionInstanceGroupManagerParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams">GoogleComputeRegionInstanceGroupManagerParams</a>

---

##### `PutStandbyPolicy` <a name="PutStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStandbyPolicy"></a>

```csharp
private void PutStandbyPolicy(GoogleComputeRegionInstanceGroupManagerStandbyPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStandbyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy">GoogleComputeRegionInstanceGroupManagerStandbyPolicy</a>

---

##### `PutStatefulDisk` <a name="PutStatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulDisk"></a>

```csharp
private void PutStatefulDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* object

---

##### `PutStatefulExternalIp` <a name="PutStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulExternalIp"></a>

```csharp
private void PutStatefulExternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulExternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutStatefulInternalIp` <a name="PutStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulInternalIp"></a>

```csharp
private void PutStatefulInternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putStatefulInternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRegionInstanceGroupManagerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts">GoogleComputeRegionInstanceGroupManagerTimeouts</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(GoogleComputeRegionInstanceGroupManagerUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `PutVersion` <a name="PutVersion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putVersion"></a>

```csharp
private void PutVersion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* object

---

##### `ResetAllInstancesConfig` <a name="ResetAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAllInstancesConfig"></a>

```csharp
private void ResetAllInstancesConfig()
```

##### `ResetAutoHealingPolicies` <a name="ResetAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetAutoHealingPolicies"></a>

```csharp
private void ResetAutoHealingPolicies()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDistributionPolicyTargetShape` <a name="ResetDistributionPolicyTargetShape" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape"></a>

```csharp
private void ResetDistributionPolicyTargetShape()
```

##### `ResetDistributionPolicyZones` <a name="ResetDistributionPolicyZones" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetDistributionPolicyZones"></a>

```csharp
private void ResetDistributionPolicyZones()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceFlexibilityPolicy` <a name="ResetInstanceFlexibilityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetInstanceFlexibilityPolicy"></a>

```csharp
private void ResetInstanceFlexibilityPolicy()
```

##### `ResetInstanceLifecyclePolicy` <a name="ResetInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetInstanceLifecyclePolicy"></a>

```csharp
private void ResetInstanceLifecyclePolicy()
```

##### `ResetListManagedInstancesResults` <a name="ResetListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetListManagedInstancesResults"></a>

```csharp
private void ResetListManagedInstancesResults()
```

##### `ResetNamedPort` <a name="ResetNamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetNamedPort"></a>

```csharp
private void ResetNamedPort()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStandbyPolicy` <a name="ResetStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStandbyPolicy"></a>

```csharp
private void ResetStandbyPolicy()
```

##### `ResetStatefulDisk` <a name="ResetStatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulDisk"></a>

```csharp
private void ResetStatefulDisk()
```

##### `ResetStatefulExternalIp` <a name="ResetStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulExternalIp"></a>

```csharp
private void ResetStatefulExternalIp()
```

##### `ResetStatefulInternalIp` <a name="ResetStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetStatefulInternalIp"></a>

```csharp
private void ResetStatefulInternalIp()
```

##### `ResetTargetPools` <a name="ResetTargetPools" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetPools"></a>

```csharp
private void ResetTargetPools()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetSize"></a>

```csharp
private void ResetTargetSize()
```

##### `ResetTargetStoppedSize` <a name="ResetTargetStoppedSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetStoppedSize"></a>

```csharp
private void ResetTargetStoppedSize()
```

##### `ResetTargetSuspendedSize` <a name="ResetTargetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTargetSuspendedSize"></a>

```csharp
private void ResetTargetSuspendedSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetWaitForInstances` <a name="ResetWaitForInstances" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstances"></a>

```csharp
private void ResetWaitForInstances()
```

##### `ResetWaitForInstancesStatus` <a name="ResetWaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.resetWaitForInstancesStatus"></a>

```csharp
private void ResetWaitForInstancesStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionInstanceGroupManager resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceGroupManager.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceGroupManager.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceGroupManager.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionInstanceGroupManager.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeRegionInstanceGroupManager resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionInstanceGroupManager to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicy">InstanceFlexibilityPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceGroup">InstanceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceGroupManagerId">InstanceGroupManagerId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicy">InstanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPort">NamedPort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList">GoogleComputeRegionInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference">GoogleComputeRegionInstanceGroupManagerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.standbyPolicy">StandbyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDisk">StatefulDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList">GoogleComputeRegionInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIp">StatefulExternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIp">StatefulInternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList">GoogleComputeRegionInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference">GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.version">Version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList">GoogleComputeRegionInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfigInput">AllInstancesConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput">AutoHealingPoliciesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceNameInput">BaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput">DistributionPolicyTargetShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput">DistributionPolicyZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicyInput">InstanceFlexibilityPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicyInput">InstanceLifecyclePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput">ListManagedInstancesResultsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPortInput">NamedPortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams">GoogleComputeRegionInstanceGroupManagerParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.standbyPolicyInput">StandbyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy">GoogleComputeRegionInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDiskInput">StatefulDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIpInput">StatefulExternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIpInput">StatefulInternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPoolsInput">TargetPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSizeInput">TargetSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetStoppedSizeInput">TargetStoppedSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSuspendedSizeInput">TargetSuspendedSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.versionInput">VersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesInput">WaitForInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput">WaitForInstancesStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceName">BaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape">DistributionPolicyTargetShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones">DistributionPolicyZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPools">TargetPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSize">TargetSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetStoppedSize">TargetStoppedSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSuspendedSize">TargetSuspendedSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstances">WaitForInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfig"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference AllInstancesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference</a>

---

##### `AutoHealingPolicies`<sup>Required</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference AutoHealingPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `InstanceFlexibilityPolicy`<sup>Required</sup> <a name="InstanceFlexibilityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference InstanceFlexibilityPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference</a>

---

##### `InstanceGroup`<sup>Required</sup> <a name="InstanceGroup" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceGroup"></a>

```csharp
public string InstanceGroup { get; }
```

- *Type:* string

---

##### `InstanceGroupManagerId`<sup>Required</sup> <a name="InstanceGroupManagerId" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceGroupManagerId"></a>

```csharp
public double InstanceGroupManagerId { get; }
```

- *Type:* double

---

##### `InstanceLifecyclePolicy`<sup>Required</sup> <a name="InstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference InstanceLifecyclePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a>

---

##### `NamedPort`<sup>Required</sup> <a name="NamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPort"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerNamedPortList NamedPort { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList">GoogleComputeRegionInstanceGroupManagerNamedPortList</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.params"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference">GoogleComputeRegionInstanceGroupManagerParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `StandbyPolicy`<sup>Required</sup> <a name="StandbyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.standbyPolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference StandbyPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference</a>

---

##### `StatefulDisk`<sup>Required</sup> <a name="StatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDisk"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatefulDiskList StatefulDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList">GoogleComputeRegionInstanceGroupManagerStatefulDiskList</a>

---

##### `StatefulExternalIp`<sup>Required</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIp"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList StatefulExternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a>

---

##### `StatefulInternalIp`<sup>Required</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIp"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList StatefulInternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.status"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList">GoogleComputeRegionInstanceGroupManagerStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeouts"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference">GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.version"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerVersionList Version { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList">GoogleComputeRegionInstanceGroupManagerVersionList</a>

---

##### `AllInstancesConfigInput`<sup>Optional</sup> <a name="AllInstancesConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.allInstancesConfigInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAllInstancesConfig AllInstancesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---

##### `AutoHealingPoliciesInput`<sup>Optional</sup> <a name="AutoHealingPoliciesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies AutoHealingPoliciesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `BaseInstanceNameInput`<sup>Optional</sup> <a name="BaseInstanceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceNameInput"></a>

```csharp
public string BaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DistributionPolicyTargetShapeInput`<sup>Optional</sup> <a name="DistributionPolicyTargetShapeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput"></a>

```csharp
public string DistributionPolicyTargetShapeInput { get; }
```

- *Type:* string

---

##### `DistributionPolicyZonesInput`<sup>Optional</sup> <a name="DistributionPolicyZonesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput"></a>

```csharp
public string[] DistributionPolicyZonesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceFlexibilityPolicyInput`<sup>Optional</sup> <a name="InstanceFlexibilityPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicyInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy InstanceFlexibilityPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a>

---

##### `InstanceLifecyclePolicyInput`<sup>Optional</sup> <a name="InstanceLifecyclePolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicyInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `ListManagedInstancesResultsInput`<sup>Optional</sup> <a name="ListManagedInstancesResultsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```csharp
public string ListManagedInstancesResultsInput { get; }
```

- *Type:* string

---

##### `NamedPortInput`<sup>Optional</sup> <a name="NamedPortInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.namedPortInput"></a>

```csharp
public object NamedPortInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.paramsInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams">GoogleComputeRegionInstanceGroupManagerParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StandbyPolicyInput`<sup>Optional</sup> <a name="StandbyPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.standbyPolicyInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStandbyPolicy StandbyPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy">GoogleComputeRegionInstanceGroupManagerStandbyPolicy</a>

---

##### `StatefulDiskInput`<sup>Optional</sup> <a name="StatefulDiskInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulDiskInput"></a>

```csharp
public object StatefulDiskInput { get; }
```

- *Type:* object

---

##### `StatefulExternalIpInput`<sup>Optional</sup> <a name="StatefulExternalIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulExternalIpInput"></a>

```csharp
public object StatefulExternalIpInput { get; }
```

- *Type:* object

---

##### `StatefulInternalIpInput`<sup>Optional</sup> <a name="StatefulInternalIpInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.statefulInternalIpInput"></a>

```csharp
public object StatefulInternalIpInput { get; }
```

- *Type:* object

---

##### `TargetPoolsInput`<sup>Optional</sup> <a name="TargetPoolsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPoolsInput"></a>

```csharp
public string[] TargetPoolsInput { get; }
```

- *Type:* string[]

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSizeInput"></a>

```csharp
public double TargetSizeInput { get; }
```

- *Type:* double

---

##### `TargetStoppedSizeInput`<sup>Optional</sup> <a name="TargetStoppedSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetStoppedSizeInput"></a>

```csharp
public double TargetStoppedSizeInput { get; }
```

- *Type:* double

---

##### `TargetSuspendedSizeInput`<sup>Optional</sup> <a name="TargetSuspendedSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSuspendedSizeInput"></a>

```csharp
public double TargetSuspendedSizeInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.updatePolicyInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.versionInput"></a>

```csharp
public object VersionInput { get; }
```

- *Type:* object

---

##### `WaitForInstancesInput`<sup>Optional</sup> <a name="WaitForInstancesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesInput"></a>

```csharp
public object WaitForInstancesInput { get; }
```

- *Type:* object

---

##### `WaitForInstancesStatusInput`<sup>Optional</sup> <a name="WaitForInstancesStatusInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```csharp
public string WaitForInstancesStatusInput { get; }
```

- *Type:* string

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.baseInstanceName"></a>

```csharp
public string BaseInstanceName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DistributionPolicyTargetShape`<sup>Required</sup> <a name="DistributionPolicyTargetShape" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape"></a>

```csharp
public string DistributionPolicyTargetShape { get; }
```

- *Type:* string

---

##### `DistributionPolicyZones`<sup>Required</sup> <a name="DistributionPolicyZones" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones"></a>

```csharp
public string[] DistributionPolicyZones { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListManagedInstancesResults`<sup>Required</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults"></a>

```csharp
public string ListManagedInstancesResults { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TargetPools`<sup>Required</sup> <a name="TargetPools" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetPools"></a>

```csharp
public string[] TargetPools { get; }
```

- *Type:* string[]

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSize"></a>

```csharp
public double TargetSize { get; }
```

- *Type:* double

---

##### `TargetStoppedSize`<sup>Required</sup> <a name="TargetStoppedSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetStoppedSize"></a>

```csharp
public double TargetStoppedSize { get; }
```

- *Type:* double

---

##### `TargetSuspendedSize`<sup>Required</sup> <a name="TargetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.targetSuspendedSize"></a>

```csharp
public double TargetSuspendedSize { get; }
```

- *Type:* double

---

##### `WaitForInstances`<sup>Required</sup> <a name="WaitForInstances" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstances"></a>

```csharp
public object WaitForInstances { get; }
```

- *Type:* object

---

##### `WaitForInstancesStatus`<sup>Required</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus"></a>

```csharp
public string WaitForInstancesStatus { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManager.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionInstanceGroupManagerAllInstancesConfig <a name="GoogleComputeRegionInstanceGroupManagerAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerAllInstancesConfig {
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The label key-value pairs that you want to patch onto the instance,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata key-value pairs that you want to patch onto the instance. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#labels GoogleComputeRegionInstanceGroupManager#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#metadata GoogleComputeRegionInstanceGroupManager#metadata}

---

### GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies <a name="GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies {
    string HealthCheck,
    double InitialDelaySec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck">HealthCheck</a></code> | <code>string</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```csharp
public string HealthCheck { get; set; }
```

- *Type:* string

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#health_check GoogleComputeRegionInstanceGroupManager#health_check}

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; set; }
```

- *Type:* double

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#initial_delay_sec GoogleComputeRegionInstanceGroupManager#initial_delay_sec}

---

### GoogleComputeRegionInstanceGroupManagerConfig <a name="GoogleComputeRegionInstanceGroupManagerConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BaseInstanceName,
    string Name,
    object Version,
    GoogleComputeRegionInstanceGroupManagerAllInstancesConfig AllInstancesConfig = null,
    GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies AutoHealingPolicies = null,
    string Description = null,
    string DistributionPolicyTargetShape = null,
    string[] DistributionPolicyZones = null,
    string Id = null,
    GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy InstanceFlexibilityPolicy = null,
    GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicy = null,
    string ListManagedInstancesResults = null,
    object NamedPort = null,
    GoogleComputeRegionInstanceGroupManagerParams Params = null,
    string Project = null,
    string Region = null,
    GoogleComputeRegionInstanceGroupManagerStandbyPolicy StandbyPolicy = null,
    object StatefulDisk = null,
    object StatefulExternalIp = null,
    object StatefulInternalIp = null,
    string[] TargetPools = null,
    double TargetSize = null,
    double TargetStoppedSize = null,
    double TargetSuspendedSize = null,
    GoogleComputeRegionInstanceGroupManagerTimeouts Timeouts = null,
    GoogleComputeRegionInstanceGroupManagerUpdatePolicy UpdatePolicy = null,
    object WaitForInstances = null,
    string WaitForInstancesStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.baseInstanceName">BaseInstanceName</a></code> | <code>string</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.version">Version</a></code> | <code>object</code> | version block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.description">Description</a></code> | <code>string</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape">DistributionPolicyTargetShape</a></code> | <code>string</code> | The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones">DistributionPolicyZones</a></code> | <code>string[]</code> | The distribution policy for this managed instance group. You can specify one or more values. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#id GoogleComputeRegionInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.instanceFlexibilityPolicy">InstanceFlexibilityPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a></code> | instance_flexibility_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.instanceLifecyclePolicy">InstanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>string</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.namedPort">NamedPort</a></code> | <code>object</code> | named_port block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams">GoogleComputeRegionInstanceGroupManagerParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.region">Region</a></code> | <code>string</code> | The region where the managed instance group resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.standbyPolicy">StandbyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy">GoogleComputeRegionInstanceGroupManagerStandbyPolicy</a></code> | standby_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulDisk">StatefulDisk</a></code> | <code>object</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulExternalIp">StatefulExternalIp</a></code> | <code>object</code> | stateful_external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulInternalIp">StatefulInternalIp</a></code> | <code>object</code> | stateful_internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetPools">TargetPools</a></code> | <code>string[]</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetSize">TargetSize</a></code> | <code>double</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetStoppedSize">TargetStoppedSize</a></code> | <code>double</code> | The target number of stopped instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetSuspendedSize">TargetSuspendedSize</a></code> | <code>double</code> | The target number of suspended instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts">GoogleComputeRegionInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstances">WaitForInstances</a></code> | <code>object</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>string</code> | When used with wait_for_instances specifies the status to wait for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.baseInstanceName"></a>

```csharp
public string BaseInstanceName { get; set; }
```

- *Type:* string

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#base_instance_name GoogleComputeRegionInstanceGroupManager#base_instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.version"></a>

```csharp
public object Version { get; set; }
```

- *Type:* object

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#version GoogleComputeRegionInstanceGroupManager#version}

---

##### `AllInstancesConfig`<sup>Optional</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.allInstancesConfig"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAllInstancesConfig AllInstancesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#all_instances_config GoogleComputeRegionInstanceGroupManager#all_instances_config}

---

##### `AutoHealingPolicies`<sup>Optional</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies AutoHealingPolicies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#auto_healing_policies GoogleComputeRegionInstanceGroupManager#auto_healing_policies}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#description GoogleComputeRegionInstanceGroupManager#description}

---

##### `DistributionPolicyTargetShape`<sup>Optional</sup> <a name="DistributionPolicyTargetShape" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape"></a>

```csharp
public string DistributionPolicyTargetShape { get; set; }
```

- *Type:* string

The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#distribution_policy_target_shape GoogleComputeRegionInstanceGroupManager#distribution_policy_target_shape}

---

##### `DistributionPolicyZones`<sup>Optional</sup> <a name="DistributionPolicyZones" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones"></a>

```csharp
public string[] DistributionPolicyZones { get; set; }
```

- *Type:* string[]

The distribution policy for this managed instance group. You can specify one or more values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#distribution_policy_zones GoogleComputeRegionInstanceGroupManager#distribution_policy_zones}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#id GoogleComputeRegionInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceFlexibilityPolicy`<sup>Optional</sup> <a name="InstanceFlexibilityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.instanceFlexibilityPolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy InstanceFlexibilityPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a>

instance_flexibility_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#instance_flexibility_policy GoogleComputeRegionInstanceGroupManager#instance_flexibility_policy}

---

##### `InstanceLifecyclePolicy`<sup>Optional</sup> <a name="InstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.instanceLifecyclePolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#instance_lifecycle_policy GoogleComputeRegionInstanceGroupManager#instance_lifecycle_policy}

---

##### `ListManagedInstancesResults`<sup>Optional</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```csharp
public string ListManagedInstancesResults { get; set; }
```

- *Type:* string

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#list_managed_instances_results GoogleComputeRegionInstanceGroupManager#list_managed_instances_results}

---

##### `NamedPort`<sup>Optional</sup> <a name="NamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.namedPort"></a>

```csharp
public object NamedPort { get; set; }
```

- *Type:* object

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#named_port GoogleComputeRegionInstanceGroupManager#named_port}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.params"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerParams Params { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams">GoogleComputeRegionInstanceGroupManagerParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#params GoogleComputeRegionInstanceGroupManager#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#project GoogleComputeRegionInstanceGroupManager#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region where the managed instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#region GoogleComputeRegionInstanceGroupManager#region}

---

##### `StandbyPolicy`<sup>Optional</sup> <a name="StandbyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.standbyPolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStandbyPolicy StandbyPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy">GoogleComputeRegionInstanceGroupManagerStandbyPolicy</a>

standby_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#standby_policy GoogleComputeRegionInstanceGroupManager#standby_policy}

---

##### `StatefulDisk`<sup>Optional</sup> <a name="StatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulDisk"></a>

```csharp
public object StatefulDisk { get; set; }
```

- *Type:* object

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#stateful_disk GoogleComputeRegionInstanceGroupManager#stateful_disk}

---

##### `StatefulExternalIp`<sup>Optional</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulExternalIp"></a>

```csharp
public object StatefulExternalIp { get; set; }
```

- *Type:* object

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#stateful_external_ip GoogleComputeRegionInstanceGroupManager#stateful_external_ip}

---

##### `StatefulInternalIp`<sup>Optional</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.statefulInternalIp"></a>

```csharp
public object StatefulInternalIp { get; set; }
```

- *Type:* object

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#stateful_internal_ip GoogleComputeRegionInstanceGroupManager#stateful_internal_ip}

---

##### `TargetPools`<sup>Optional</sup> <a name="TargetPools" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetPools"></a>

```csharp
public string[] TargetPools { get; set; }
```

- *Type:* string[]

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#target_pools GoogleComputeRegionInstanceGroupManager#target_pools}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetSize"></a>

```csharp
public double TargetSize { get; set; }
```

- *Type:* double

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#target_size GoogleComputeRegionInstanceGroupManager#target_size}

---

##### `TargetStoppedSize`<sup>Optional</sup> <a name="TargetStoppedSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetStoppedSize"></a>

```csharp
public double TargetStoppedSize { get; set; }
```

- *Type:* double

The target number of stopped instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#target_stopped_size GoogleComputeRegionInstanceGroupManager#target_stopped_size}

---

##### `TargetSuspendedSize`<sup>Optional</sup> <a name="TargetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.targetSuspendedSize"></a>

```csharp
public double TargetSuspendedSize { get; set; }
```

- *Type:* double

The target number of suspended instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#target_suspended_size GoogleComputeRegionInstanceGroupManager#target_suspended_size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.timeouts"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts">GoogleComputeRegionInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#timeouts GoogleComputeRegionInstanceGroupManager#timeouts}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.updatePolicy"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#update_policy GoogleComputeRegionInstanceGroupManager#update_policy}

---

##### `WaitForInstances`<sup>Optional</sup> <a name="WaitForInstances" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstances"></a>

```csharp
public object WaitForInstances { get; set; }
```

- *Type:* object

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#wait_for_instances GoogleComputeRegionInstanceGroupManager#wait_for_instances}

---

##### `WaitForInstancesStatus`<sup>Optional</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```csharp
public string WaitForInstancesStatus { get; set; }
```

- *Type:* string

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#wait_for_instances_status GoogleComputeRegionInstanceGroupManager#wait_for_instances_status}

---

### GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy <a name="GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy {
    object InstanceSelections = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy.property.instanceSelections">InstanceSelections</a></code> | <code>object</code> | instance_selections block. |

---

##### `InstanceSelections`<sup>Optional</sup> <a name="InstanceSelections" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy.property.instanceSelections"></a>

```csharp
public object InstanceSelections { get; set; }
```

- *Type:* object

instance_selections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#instance_selections GoogleComputeRegionInstanceGroupManager#instance_selections}

---

### GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections <a name="GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections {
    string[] MachineTypes,
    string Name,
    double Rank = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.property.machineTypes">MachineTypes</a></code> | <code>string[]</code> | Full machine-type names, e.g. "n1-standard-16". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.property.name">Name</a></code> | <code>string</code> | Instance selection name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.property.rank">Rank</a></code> | <code>double</code> | Preference of this instance selection. |

---

##### `MachineTypes`<sup>Required</sup> <a name="MachineTypes" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.property.machineTypes"></a>

```csharp
public string[] MachineTypes { get; set; }
```

- *Type:* string[]

Full machine-type names, e.g. "n1-standard-16".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#machine_types GoogleComputeRegionInstanceGroupManager#machine_types}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Instance selection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}

---

##### `Rank`<sup>Optional</sup> <a name="Rank" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.property.rank"></a>

```csharp
public double Rank { get; set; }
```

- *Type:* double

Preference of this instance selection.

Lower number means higher preference. MIG will first try to create a VM based on the machine-type with lowest rank and fallback to next rank based on availability. Machine types and instance selections with the same rank have the same preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#rank GoogleComputeRegionInstanceGroupManager#rank}

---

### GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy <a name="GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy {
    string DefaultActionOnFailure = null,
    string ForceUpdateOnRepair = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure">DefaultActionOnFailure</a></code> | <code>string</code> | Default behavior for all instance or health check failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair">ForceUpdateOnRepair</a></code> | <code>string</code> | Specifies whether to apply the group's latest configuration when repairing a VM. |

---

##### `DefaultActionOnFailure`<sup>Optional</sup> <a name="DefaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure"></a>

```csharp
public string DefaultActionOnFailure { get; set; }
```

- *Type:* string

Default behavior for all instance or health check failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#default_action_on_failure GoogleComputeRegionInstanceGroupManager#default_action_on_failure}

---

##### `ForceUpdateOnRepair`<sup>Optional</sup> <a name="ForceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair"></a>

```csharp
public string ForceUpdateOnRepair { get; set; }
```

- *Type:* string

Specifies whether to apply the group's latest configuration when repairing a VM.

Valid options are: YES, NO. If YES and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If NO (default), then updates are applied in accordance with the group's update policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#force_update_on_repair GoogleComputeRegionInstanceGroupManager#force_update_on_repair}

---

### GoogleComputeRegionInstanceGroupManagerNamedPort <a name="GoogleComputeRegionInstanceGroupManagerNamedPort" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerNamedPort {
    string Name,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.name">Name</a></code> | <code>string</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.port">Port</a></code> | <code>double</code> | The port number. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPort.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#port GoogleComputeRegionInstanceGroupManager#port}

---

### GoogleComputeRegionInstanceGroupManagerParams <a name="GoogleComputeRegionInstanceGroupManagerParams" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to bind to the managed instance group. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to bind to the managed instance group.

The tags are key-value pairs. Keys must be in the format tagKeys/123 and values in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#resource_manager_tags GoogleComputeRegionInstanceGroupManager#resource_manager_tags}

---

### GoogleComputeRegionInstanceGroupManagerStandbyPolicy <a name="GoogleComputeRegionInstanceGroupManagerStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStandbyPolicy {
    double InitialDelaySec = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy.property.mode">Mode</a></code> | <code>string</code> | Defines how a MIG resumes or starts VMs from a standby pool when the group scales out. |

---

##### `InitialDelaySec`<sup>Optional</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; set; }
```

- *Type:* double

Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created.

The initial delay gives the initialization script the time to prepare your VM for a quick scale out. The value of initial delay must be between 0 and 3600 seconds. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#initial_delay_sec GoogleComputeRegionInstanceGroupManager#initial_delay_sec}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Defines how a MIG resumes or starts VMs from a standby pool when the group scales out.

The default mode is "MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#mode GoogleComputeRegionInstanceGroupManager#mode}

---

### GoogleComputeRegionInstanceGroupManagerStatefulDisk <a name="GoogleComputeRegionInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulDisk {
    string DeviceName,
    string DeleteRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#device_name GoogleComputeRegionInstanceGroupManager#device_name}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#delete_rule GoogleComputeRegionInstanceGroupManager#delete_rule}

---

### GoogleComputeRegionInstanceGroupManagerStatefulExternalIp <a name="GoogleComputeRegionInstanceGroupManagerStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulExternalIp {
    string DeleteRule = null,
    string InterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#delete_rule GoogleComputeRegionInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#interface_name GoogleComputeRegionInstanceGroupManager#interface_name}

---

### GoogleComputeRegionInstanceGroupManagerStatefulInternalIp <a name="GoogleComputeRegionInstanceGroupManagerStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulInternalIp {
    string DeleteRule = null,
    string InterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#delete_rule GoogleComputeRegionInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#interface_name GoogleComputeRegionInstanceGroupManager#interface_name}

---

### GoogleComputeRegionInstanceGroupManagerStatus <a name="GoogleComputeRegionInstanceGroupManagerStatus" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatus {

};
```


### GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig <a name="GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig {

};
```


### GoogleComputeRegionInstanceGroupManagerStatusStateful <a name="GoogleComputeRegionInstanceGroupManagerStatusStateful" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusStateful {

};
```


### GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs {

};
```


### GoogleComputeRegionInstanceGroupManagerStatusVersionTarget <a name="GoogleComputeRegionInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusVersionTarget {

};
```


### GoogleComputeRegionInstanceGroupManagerTimeouts <a name="GoogleComputeRegionInstanceGroupManagerTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#create GoogleComputeRegionInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#delete GoogleComputeRegionInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#update GoogleComputeRegionInstanceGroupManager#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#create GoogleComputeRegionInstanceGroupManager#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#delete GoogleComputeRegionInstanceGroupManager#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#update GoogleComputeRegionInstanceGroupManager#update}.

---

### GoogleComputeRegionInstanceGroupManagerUpdatePolicy <a name="GoogleComputeRegionInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerUpdatePolicy {
    string MinimalAction,
    string Type,
    string InstanceRedistributionType = null,
    double MaxSurgeFixed = null,
    double MaxSurgePercent = null,
    double MaxUnavailableFixed = null,
    double MaxUnavailablePercent = null,
    double MinReadySec = null,
    string MostDisruptiveAllowedAction = null,
    string ReplacementMethod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction">MinimalAction</a></code> | <code>string</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.type">Type</a></code> | <code>string</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType">InstanceRedistributionType</a></code> | <code>string</code> | The instance redistribution policy for regional managed instance groups. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minReadySec">MinReadySec</a></code> | <code>double</code> | Minimum number of seconds to wait for after a newly created instance becomes available. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod">ReplacementMethod</a></code> | <code>string</code> | The instance replacement method for regional managed instance groups. |

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```csharp
public string MinimalAction { get; set; }
```

- *Type:* string

Minimal action to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#minimal_action GoogleComputeRegionInstanceGroupManager#minimal_action}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#type GoogleComputeRegionInstanceGroupManager#type}

---

##### `InstanceRedistributionType`<sup>Optional</sup> <a name="InstanceRedistributionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType"></a>

```csharp
public string InstanceRedistributionType { get; set; }
```

- *Type:* string

The instance redistribution policy for regional managed instance groups.

Valid values are: "PROACTIVE", "NONE". If PROACTIVE (default), the group attempts to maintain an even distribution of VM instances across zones in the region. If NONE, proactive redistribution is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#instance_redistribution_type GoogleComputeRegionInstanceGroupManager#instance_redistribution_type}

---

##### `MaxSurgeFixed`<sup>Optional</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```csharp
public double MaxSurgeFixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances.

This must be a positive integer. Conflicts with max_surge_percent. Both cannot be 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#max_surge_fixed GoogleComputeRegionInstanceGroupManager#max_surge_fixed}

---

##### `MaxSurgePercent`<sup>Optional</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```csharp
public double MaxSurgePercent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#max_surge_percent GoogleComputeRegionInstanceGroupManager#max_surge_percent}

---

##### `MaxUnavailableFixed`<sup>Optional</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```csharp
public double MaxUnavailableFixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#max_unavailable_fixed GoogleComputeRegionInstanceGroupManager#max_unavailable_fixed}

---

##### `MaxUnavailablePercent`<sup>Optional</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```csharp
public double MaxUnavailablePercent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#max_unavailable_percent GoogleComputeRegionInstanceGroupManager#max_unavailable_percent}

---

##### `MinReadySec`<sup>Optional</sup> <a name="MinReadySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.minReadySec"></a>

```csharp
public double MinReadySec { get; set; }
```

- *Type:* double

Minimum number of seconds to wait for after a newly created instance becomes available.

This value must be from range [0, 3600].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#min_ready_sec GoogleComputeRegionInstanceGroupManager#min_ready_sec}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; set; }
```

- *Type:* string

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#most_disruptive_allowed_action GoogleComputeRegionInstanceGroupManager#most_disruptive_allowed_action}

---

##### `ReplacementMethod`<sup>Optional</sup> <a name="ReplacementMethod" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```csharp
public string ReplacementMethod { get; set; }
```

- *Type:* string

The instance replacement method for regional managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#replacement_method GoogleComputeRegionInstanceGroupManager#replacement_method}

---

### GoogleComputeRegionInstanceGroupManagerVersion <a name="GoogleComputeRegionInstanceGroupManagerVersion" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerVersion {
    string InstanceTemplate,
    string Name = null,
    GoogleComputeRegionInstanceGroupManagerVersionTargetSize TargetSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.instanceTemplate">InstanceTemplate</a></code> | <code>string</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.name">Name</a></code> | <code>string</code> | Version name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.instanceTemplate"></a>

```csharp
public string InstanceTemplate { get; set; }
```

- *Type:* string

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#instance_template GoogleComputeRegionInstanceGroupManager#instance_template}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#name GoogleComputeRegionInstanceGroupManager#name}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersion.property.targetSize"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerVersionTargetSize TargetSize { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#target_size GoogleComputeRegionInstanceGroupManager#target_size}

---

### GoogleComputeRegionInstanceGroupManagerVersionTargetSize <a name="GoogleComputeRegionInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerVersionTargetSize {
    double Fixed = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed">Fixed</a></code> | <code>double</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.percent">Percent</a></code> | <code>double</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#fixed GoogleComputeRegionInstanceGroupManager#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_compute_region_instance_group_manager#percent GoogleComputeRegionInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference <a name="GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAllInstancesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---


### GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">InitialDelaySecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">HealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```csharp
public string HealthCheckInput { get; }
```

- *Type:* string

---

##### `InitialDelaySecInput`<sup>Optional</sup> <a name="InitialDelaySecInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```csharp
public double InitialDelaySecInput { get; }
```

- *Type:* double

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```csharp
public string HealthCheck { get; }
```

- *Type:* string

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">GoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---


### GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList <a name="GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference <a name="GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resetRank">ResetRank</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRank` <a name="ResetRank" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resetRank"></a>

```csharp
private void ResetRank()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypesInput">MachineTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rankInput">RankInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypes">MachineTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rank">Rank</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MachineTypesInput`<sup>Optional</sup> <a name="MachineTypesInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypesInput"></a>

```csharp
public string[] MachineTypesInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RankInput`<sup>Optional</sup> <a name="RankInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rankInput"></a>

```csharp
public double RankInput { get; }
```

- *Type:* double

---

##### `MachineTypes`<sup>Required</sup> <a name="MachineTypes" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypes"></a>

```csharp
public string[] MachineTypes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rank`<sup>Required</sup> <a name="Rank" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rank"></a>

```csharp
public double Rank { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference <a name="GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.putInstanceSelections">PutInstanceSelections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resetInstanceSelections">ResetInstanceSelections</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInstanceSelections` <a name="PutInstanceSelections" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.putInstanceSelections"></a>

```csharp
private void PutInstanceSelections(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.putInstanceSelections.parameter.value"></a>

- *Type:* object

---

##### `ResetInstanceSelections` <a name="ResetInstanceSelections" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resetInstanceSelections"></a>

```csharp
private void ResetInstanceSelections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelections">InstanceSelections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelectionsInput">InstanceSelectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceSelections`<sup>Required</sup> <a name="InstanceSelections" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelections"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList InstanceSelections { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList</a>

---

##### `InstanceSelectionsInput`<sup>Optional</sup> <a name="InstanceSelectionsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelectionsInput"></a>

```csharp
public object InstanceSelectionsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">GoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a>

---


### GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure">ResetDefaultActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair">ResetForceUpdateOnRepair</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultActionOnFailure` <a name="ResetDefaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure"></a>

```csharp
private void ResetDefaultActionOnFailure()
```

##### `ResetForceUpdateOnRepair` <a name="ResetForceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair"></a>

```csharp
private void ResetForceUpdateOnRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput">DefaultActionOnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput">ForceUpdateOnRepairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">DefaultActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">ForceUpdateOnRepair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultActionOnFailureInput`<sup>Optional</sup> <a name="DefaultActionOnFailureInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput"></a>

```csharp
public string DefaultActionOnFailureInput { get; }
```

- *Type:* string

---

##### `ForceUpdateOnRepairInput`<sup>Optional</sup> <a name="ForceUpdateOnRepairInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput"></a>

```csharp
public string ForceUpdateOnRepairInput { get; }
```

- *Type:* string

---

##### `DefaultActionOnFailure`<sup>Required</sup> <a name="DefaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```csharp
public string DefaultActionOnFailure { get; }
```

- *Type:* string

---

##### `ForceUpdateOnRepair`<sup>Required</sup> <a name="ForceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```csharp
public string ForceUpdateOnRepair { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### GoogleComputeRegionInstanceGroupManagerNamedPortList <a name="GoogleComputeRegionInstanceGroupManagerNamedPortList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerNamedPortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference <a name="GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerParamsOutputReference <a name="GoogleComputeRegionInstanceGroupManagerParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams">GoogleComputeRegionInstanceGroupManagerParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerParams">GoogleComputeRegionInstanceGroupManagerParams</a>

---


### GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec">ResetInitialDelaySec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInitialDelaySec` <a name="ResetInitialDelaySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec"></a>

```csharp
private void ResetInitialDelaySec()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput">InitialDelaySecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy">GoogleComputeRegionInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialDelaySecInput`<sup>Optional</sup> <a name="InitialDelaySecInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput"></a>

```csharp
public double InitialDelaySecInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStandbyPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStandbyPolicy">GoogleComputeRegionInstanceGroupManagerStandbyPolicy</a>

---


### GoogleComputeRegionInstanceGroupManagerStatefulDiskList <a name="GoogleComputeRegionInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList <a name="GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName"></a>

```csharp
private void ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList <a name="GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName"></a>

```csharp
private void ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList <a name="GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">CurrentRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">Effective</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentRevision`<sup>Required</sup> <a name="CurrentRevision" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```csharp
public string CurrentRevision { get; }
```

- *Type:* string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```csharp
public IResolvable Effective { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusList <a name="GoogleComputeRegionInstanceGroupManagerStatusList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionInstanceGroupManagerStatusOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable">IsStable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful">Stateful</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList">GoogleComputeRegionInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget">VersionTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus">GoogleComputeRegionInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList AllInstancesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `IsStable`<sup>Required</sup> <a name="IsStable" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```csharp
public IResolvable IsStable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Stateful`<sup>Required</sup> <a name="Stateful" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusStatefulList Stateful { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList">GoogleComputeRegionInstanceGroupManagerStatusStatefulList</a>

---

##### `VersionTarget`<sup>Required</sup> <a name="VersionTarget" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList VersionTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatus">GoogleComputeRegionInstanceGroupManagerStatus</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulList <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusStatefulList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">HasStatefulConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">PerInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful">GoogleComputeRegionInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HasStatefulConfig`<sup>Required</sup> <a name="HasStatefulConfig" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```csharp
public IResolvable HasStatefulConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PerInstanceConfigs`<sup>Required</sup> <a name="PerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList PerInstanceConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusStateful InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStateful">GoogleComputeRegionInstanceGroupManagerStatusStateful</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">AllEffective</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllEffective`<sup>Required</sup> <a name="AllEffective" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```csharp
public IResolvable AllEffective { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList <a name="GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference <a name="GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">IsReached</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget">GoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReached`<sup>Required</sup> <a name="IsReached" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```csharp
public IResolvable IsReached { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerStatusVersionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerStatusVersionTarget">GoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a>

---


### GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference <a name="GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference <a name="GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType">ResetInstanceRedistributionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">ResetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">ResetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">ResetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">ResetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec">ResetMinReadySec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">ResetReplacementMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceRedistributionType` <a name="ResetInstanceRedistributionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType"></a>

```csharp
private void ResetInstanceRedistributionType()
```

##### `ResetMaxSurgeFixed` <a name="ResetMaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```csharp
private void ResetMaxSurgeFixed()
```

##### `ResetMaxSurgePercent` <a name="ResetMaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```csharp
private void ResetMaxSurgePercent()
```

##### `ResetMaxUnavailableFixed` <a name="ResetMaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```csharp
private void ResetMaxUnavailableFixed()
```

##### `ResetMaxUnavailablePercent` <a name="ResetMaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```csharp
private void ResetMaxUnavailablePercent()
```

##### `ResetMinReadySec` <a name="ResetMinReadySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec"></a>

```csharp
private void ResetMinReadySec()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```csharp
private void ResetMostDisruptiveAllowedAction()
```

##### `ResetReplacementMethod` <a name="ResetReplacementMethod" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```csharp
private void ResetReplacementMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput">InstanceRedistributionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">MaxSurgeFixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">MaxSurgePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">MaxUnavailableFixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">MaxUnavailablePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">MinimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput">MinReadySecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">ReplacementMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType">InstanceRedistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">MinimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec">MinReadySec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">ReplacementMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceRedistributionTypeInput`<sup>Optional</sup> <a name="InstanceRedistributionTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput"></a>

```csharp
public string InstanceRedistributionTypeInput { get; }
```

- *Type:* string

---

##### `MaxSurgeFixedInput`<sup>Optional</sup> <a name="MaxSurgeFixedInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```csharp
public double MaxSurgeFixedInput { get; }
```

- *Type:* double

---

##### `MaxSurgePercentInput`<sup>Optional</sup> <a name="MaxSurgePercentInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```csharp
public double MaxSurgePercentInput { get; }
```

- *Type:* double

---

##### `MaxUnavailableFixedInput`<sup>Optional</sup> <a name="MaxUnavailableFixedInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```csharp
public double MaxUnavailableFixedInput { get; }
```

- *Type:* double

---

##### `MaxUnavailablePercentInput`<sup>Optional</sup> <a name="MaxUnavailablePercentInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```csharp
public double MaxUnavailablePercentInput { get; }
```

- *Type:* double

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```csharp
public string MinimalActionInput { get; }
```

- *Type:* string

---

##### `MinReadySecInput`<sup>Optional</sup> <a name="MinReadySecInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput"></a>

```csharp
public double MinReadySecInput { get; }
```

- *Type:* double

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```csharp
public string MostDisruptiveAllowedActionInput { get; }
```

- *Type:* string

---

##### `ReplacementMethodInput`<sup>Optional</sup> <a name="ReplacementMethodInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```csharp
public string ReplacementMethodInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `InstanceRedistributionType`<sup>Required</sup> <a name="InstanceRedistributionType" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType"></a>

```csharp
public string InstanceRedistributionType { get; }
```

- *Type:* string

---

##### `MaxSurgeFixed`<sup>Required</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```csharp
public double MaxSurgeFixed { get; }
```

- *Type:* double

---

##### `MaxSurgePercent`<sup>Required</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```csharp
public double MaxSurgePercent { get; }
```

- *Type:* double

---

##### `MaxUnavailableFixed`<sup>Required</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```csharp
public double MaxUnavailableFixed { get; }
```

- *Type:* double

---

##### `MaxUnavailablePercent`<sup>Required</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```csharp
public double MaxUnavailablePercent { get; }
```

- *Type:* double

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```csharp
public string MinimalAction { get; }
```

- *Type:* string

---

##### `MinReadySec`<sup>Required</sup> <a name="MinReadySec" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec"></a>

```csharp
public double MinReadySec { get; }
```

- *Type:* double

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; }
```

- *Type:* string

---

##### `ReplacementMethod`<sup>Required</sup> <a name="ReplacementMethod" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```csharp
public string ReplacementMethod { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerUpdatePolicy">GoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---


### GoogleComputeRegionInstanceGroupManagerVersionList <a name="GoogleComputeRegionInstanceGroupManagerVersionList" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.get"></a>

```csharp
private GoogleComputeRegionInstanceGroupManagerVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerVersionOutputReference <a name="GoogleComputeRegionInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize">PutTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize">ResetTargetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetSize` <a name="PutTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```csharp
private void PutTargetSize(GoogleComputeRegionInstanceGroupManagerVersionTargetSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```csharp
private void ResetTargetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">InstanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput">TargetSizeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate">InstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference TargetSize { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `InstanceTemplateInput`<sup>Optional</sup> <a name="InstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```csharp
public string InstanceTemplateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerVersionTargetSize TargetSizeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```csharp
public string InstanceTemplate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference <a name="GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRegionInstanceGroupManagerVersionTargetSize InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionInstanceGroupManager.GoogleComputeRegionInstanceGroupManagerVersionTargetSize">GoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---



