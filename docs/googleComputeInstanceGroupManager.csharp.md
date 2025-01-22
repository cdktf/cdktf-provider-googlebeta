# `googleComputeInstanceGroupManager` Submodule <a name="`googleComputeInstanceGroupManager` Submodule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstanceGroupManager <a name="GoogleComputeInstanceGroupManager" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager google_compute_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManager(Construct Scope, string Id, GoogleComputeInstanceGroupManagerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig">GoogleComputeInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig">GoogleComputeInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig">PutAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies">PutAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy">PutInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort">PutNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy">PutStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk">PutStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp">PutStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp">PutStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion">PutVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig">ResetAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies">ResetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy">ResetInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults">ResetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort">ResetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy">ResetStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk">ResetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp">ResetStatefulExternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp">ResetStatefulInternalIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools">ResetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize">ResetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize">ResetTargetStoppedSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize">ResetTargetSuspendedSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances">ResetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus">ResetWaitForInstancesStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllInstancesConfig` <a name="PutAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig"></a>

```csharp
private void PutAllInstancesConfig(GoogleComputeInstanceGroupManagerAllInstancesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAllInstancesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `PutAutoHealingPolicies` <a name="PutAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies"></a>

```csharp
private void PutAutoHealingPolicies(GoogleComputeInstanceGroupManagerAutoHealingPolicies Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `PutInstanceLifecyclePolicy` <a name="PutInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy"></a>

```csharp
private void PutInstanceLifecyclePolicy(GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putInstanceLifecyclePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `PutNamedPort` <a name="PutNamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort"></a>

```csharp
private void PutNamedPort(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* object

---

##### `PutParams` <a name="PutParams" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams"></a>

```csharp
private void PutParams(GoogleComputeInstanceGroupManagerParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---

##### `PutStandbyPolicy` <a name="PutStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy"></a>

```csharp
private void PutStandbyPolicy(GoogleComputeInstanceGroupManagerStandbyPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStandbyPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---

##### `PutStatefulDisk` <a name="PutStatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk"></a>

```csharp
private void PutStatefulDisk(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* object

---

##### `PutStatefulExternalIp` <a name="PutStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp"></a>

```csharp
private void PutStatefulExternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulExternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutStatefulInternalIp` <a name="PutStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp"></a>

```csharp
private void PutStatefulInternalIp(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putStatefulInternalIp.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeInstanceGroupManagerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy"></a>

```csharp
private void PutUpdatePolicy(GoogleComputeInstanceGroupManagerUpdatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `PutVersion` <a name="PutVersion" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion"></a>

```csharp
private void PutVersion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* object

---

##### `ResetAllInstancesConfig` <a name="ResetAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAllInstancesConfig"></a>

```csharp
private void ResetAllInstancesConfig()
```

##### `ResetAutoHealingPolicies` <a name="ResetAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetAutoHealingPolicies"></a>

```csharp
private void ResetAutoHealingPolicies()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceLifecyclePolicy` <a name="ResetInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetInstanceLifecyclePolicy"></a>

```csharp
private void ResetInstanceLifecyclePolicy()
```

##### `ResetListManagedInstancesResults` <a name="ResetListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetListManagedInstancesResults"></a>

```csharp
private void ResetListManagedInstancesResults()
```

##### `ResetNamedPort` <a name="ResetNamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetNamedPort"></a>

```csharp
private void ResetNamedPort()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStandbyPolicy` <a name="ResetStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStandbyPolicy"></a>

```csharp
private void ResetStandbyPolicy()
```

##### `ResetStatefulDisk` <a name="ResetStatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulDisk"></a>

```csharp
private void ResetStatefulDisk()
```

##### `ResetStatefulExternalIp` <a name="ResetStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulExternalIp"></a>

```csharp
private void ResetStatefulExternalIp()
```

##### `ResetStatefulInternalIp` <a name="ResetStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetStatefulInternalIp"></a>

```csharp
private void ResetStatefulInternalIp()
```

##### `ResetTargetPools` <a name="ResetTargetPools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetPools"></a>

```csharp
private void ResetTargetPools()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSize"></a>

```csharp
private void ResetTargetSize()
```

##### `ResetTargetStoppedSize` <a name="ResetTargetStoppedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetStoppedSize"></a>

```csharp
private void ResetTargetStoppedSize()
```

##### `ResetTargetSuspendedSize` <a name="ResetTargetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTargetSuspendedSize"></a>

```csharp
private void ResetTargetSuspendedSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetUpdatePolicy"></a>

```csharp
private void ResetUpdatePolicy()
```

##### `ResetWaitForInstances` <a name="ResetWaitForInstances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstances"></a>

```csharp
private void ResetWaitForInstances()
```

##### `ResetWaitForInstancesStatus` <a name="ResetWaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetWaitForInstancesStatus"></a>

```csharp
private void ResetWaitForInstancesStatus()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceGroupManager.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceGroupManager.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceGroupManager.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstanceGroupManager.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstanceGroupManager to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup">InstanceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId">InstanceGroupManagerId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy">InstanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort">NamedPort</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy">StandbyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk">StatefulDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp">StatefulExternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp">StatefulInternalIp</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version">Version</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput">AllInstancesConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput">AutoHealingPoliciesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput">BaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput">InstanceLifecyclePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput">ListManagedInstancesResultsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput">NamedPortInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput">StandbyPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput">StatefulDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput">StatefulExternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput">StatefulInternalIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput">TargetPoolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput">TargetSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput">TargetStoppedSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput">TargetSuspendedSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput">VersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput">WaitForInstancesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput">WaitForInstancesStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName">BaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools">TargetPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize">TargetSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize">TargetStoppedSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize">TargetSuspendedSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances">WaitForInstances</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfig"></a>

```csharp
public GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference AllInstancesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference">GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference</a>

---

##### `AutoHealingPolicies`<sup>Required</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPolicies"></a>

```csharp
public GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference AutoHealingPolicies { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference">GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `InstanceGroup`<sup>Required</sup> <a name="InstanceGroup" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroup"></a>

```csharp
public string InstanceGroup { get; }
```

- *Type:* string

---

##### `InstanceGroupManagerId`<sup>Required</sup> <a name="InstanceGroupManagerId" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceGroupManagerId"></a>

```csharp
public double InstanceGroupManagerId { get; }
```

- *Type:* double

---

##### `InstanceLifecyclePolicy`<sup>Required</sup> <a name="InstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```csharp
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference InstanceLifecyclePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference</a>

---

##### `NamedPort`<sup>Required</sup> <a name="NamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPort"></a>

```csharp
public GoogleComputeInstanceGroupManagerNamedPortList NamedPort { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList">GoogleComputeInstanceGroupManagerNamedPortList</a>

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.params"></a>

```csharp
public GoogleComputeInstanceGroupManagerParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference">GoogleComputeInstanceGroupManagerParamsOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `StandbyPolicy`<sup>Required</sup> <a name="StandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicy"></a>

```csharp
public GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference StandbyPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference">GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference</a>

---

##### `StatefulDisk`<sup>Required</sup> <a name="StatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDisk"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatefulDiskList StatefulDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList">GoogleComputeInstanceGroupManagerStatefulDiskList</a>

---

##### `StatefulExternalIp`<sup>Required</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIp"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatefulExternalIpList StatefulExternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList">GoogleComputeInstanceGroupManagerStatefulExternalIpList</a>

---

##### `StatefulInternalIp`<sup>Required</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIp"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatefulInternalIpList StatefulInternalIp { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList">GoogleComputeInstanceGroupManagerStatefulInternalIpList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.status"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList">GoogleComputeInstanceGroupManagerStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeouts"></a>

```csharp
public GoogleComputeInstanceGroupManagerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference">GoogleComputeInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicy"></a>

```csharp
public GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference UpdatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference">GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.version"></a>

```csharp
public GoogleComputeInstanceGroupManagerVersionList Version { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList">GoogleComputeInstanceGroupManagerVersionList</a>

---

##### `AllInstancesConfigInput`<sup>Optional</sup> <a name="AllInstancesConfigInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.allInstancesConfigInput"></a>

```csharp
public GoogleComputeInstanceGroupManagerAllInstancesConfig AllInstancesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---

##### `AutoHealingPoliciesInput`<sup>Optional</sup> <a name="AutoHealingPoliciesInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```csharp
public GoogleComputeInstanceGroupManagerAutoHealingPolicies AutoHealingPoliciesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---

##### `BaseInstanceNameInput`<sup>Optional</sup> <a name="BaseInstanceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceNameInput"></a>

```csharp
public string BaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceLifecyclePolicyInput`<sup>Optional</sup> <a name="InstanceLifecyclePolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.instanceLifecyclePolicyInput"></a>

```csharp
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---

##### `ListManagedInstancesResultsInput`<sup>Optional</sup> <a name="ListManagedInstancesResultsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```csharp
public string ListManagedInstancesResultsInput { get; }
```

- *Type:* string

---

##### `NamedPortInput`<sup>Optional</sup> <a name="NamedPortInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.namedPortInput"></a>

```csharp
public object NamedPortInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.paramsInput"></a>

```csharp
public GoogleComputeInstanceGroupManagerParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `StandbyPolicyInput`<sup>Optional</sup> <a name="StandbyPolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.standbyPolicyInput"></a>

```csharp
public GoogleComputeInstanceGroupManagerStandbyPolicy StandbyPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---

##### `StatefulDiskInput`<sup>Optional</sup> <a name="StatefulDiskInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulDiskInput"></a>

```csharp
public object StatefulDiskInput { get; }
```

- *Type:* object

---

##### `StatefulExternalIpInput`<sup>Optional</sup> <a name="StatefulExternalIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulExternalIpInput"></a>

```csharp
public object StatefulExternalIpInput { get; }
```

- *Type:* object

---

##### `StatefulInternalIpInput`<sup>Optional</sup> <a name="StatefulInternalIpInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.statefulInternalIpInput"></a>

```csharp
public object StatefulInternalIpInput { get; }
```

- *Type:* object

---

##### `TargetPoolsInput`<sup>Optional</sup> <a name="TargetPoolsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPoolsInput"></a>

```csharp
public string[] TargetPoolsInput { get; }
```

- *Type:* string[]

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSizeInput"></a>

```csharp
public double TargetSizeInput { get; }
```

- *Type:* double

---

##### `TargetStoppedSizeInput`<sup>Optional</sup> <a name="TargetStoppedSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSizeInput"></a>

```csharp
public double TargetStoppedSizeInput { get; }
```

- *Type:* double

---

##### `TargetSuspendedSizeInput`<sup>Optional</sup> <a name="TargetSuspendedSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSizeInput"></a>

```csharp
public double TargetSuspendedSizeInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.updatePolicyInput"></a>

```csharp
public GoogleComputeInstanceGroupManagerUpdatePolicy UpdatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.versionInput"></a>

```csharp
public object VersionInput { get; }
```

- *Type:* object

---

##### `WaitForInstancesInput`<sup>Optional</sup> <a name="WaitForInstancesInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesInput"></a>

```csharp
public object WaitForInstancesInput { get; }
```

- *Type:* object

---

##### `WaitForInstancesStatusInput`<sup>Optional</sup> <a name="WaitForInstancesStatusInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```csharp
public string WaitForInstancesStatusInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.baseInstanceName"></a>

```csharp
public string BaseInstanceName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListManagedInstancesResults`<sup>Required</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.listManagedInstancesResults"></a>

```csharp
public string ListManagedInstancesResults { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TargetPools`<sup>Required</sup> <a name="TargetPools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetPools"></a>

```csharp
public string[] TargetPools { get; }
```

- *Type:* string[]

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSize"></a>

```csharp
public double TargetSize { get; }
```

- *Type:* double

---

##### `TargetStoppedSize`<sup>Required</sup> <a name="TargetStoppedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetStoppedSize"></a>

```csharp
public double TargetStoppedSize { get; }
```

- *Type:* double

---

##### `TargetSuspendedSize`<sup>Required</sup> <a name="TargetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.targetSuspendedSize"></a>

```csharp
public double TargetSuspendedSize { get; }
```

- *Type:* double

---

##### `WaitForInstances`<sup>Required</sup> <a name="WaitForInstances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstances"></a>

```csharp
public object WaitForInstances { get; }
```

- *Type:* object

---

##### `WaitForInstancesStatus`<sup>Required</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.waitForInstancesStatus"></a>

```csharp
public string WaitForInstancesStatus { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManager.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerAllInstancesConfig {
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The label key-value pairs that you want to patch onto the instance,. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The metadata key-value pairs that you want to patch onto the instance. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The label key-value pairs that you want to patch onto the instance,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#labels GoogleComputeInstanceGroupManager#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The metadata key-value pairs that you want to patch onto the instance.

For more information, see Project and instance metadata,

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#metadata GoogleComputeInstanceGroupManager#metadata}

---

### GoogleComputeInstanceGroupManagerAutoHealingPolicies <a name="GoogleComputeInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerAutoHealingPolicies {
    string HealthCheck,
    double InitialDelaySec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck">HealthCheck</a></code> | <code>string</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```csharp
public string HealthCheck { get; set; }
```

- *Type:* string

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#health_check GoogleComputeInstanceGroupManager#health_check}

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; set; }
```

- *Type:* double

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

### GoogleComputeInstanceGroupManagerConfig <a name="GoogleComputeInstanceGroupManagerConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerConfig {
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
    GoogleComputeInstanceGroupManagerAllInstancesConfig AllInstancesConfig = null,
    GoogleComputeInstanceGroupManagerAutoHealingPolicies AutoHealingPolicies = null,
    string Description = null,
    string Id = null,
    GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicy = null,
    string ListManagedInstancesResults = null,
    object NamedPort = null,
    GoogleComputeInstanceGroupManagerParams Params = null,
    string Project = null,
    GoogleComputeInstanceGroupManagerStandbyPolicy StandbyPolicy = null,
    object StatefulDisk = null,
    object StatefulExternalIp = null,
    object StatefulInternalIp = null,
    string[] TargetPools = null,
    double TargetSize = null,
    double TargetStoppedSize = null,
    double TargetSuspendedSize = null,
    GoogleComputeInstanceGroupManagerTimeouts Timeouts = null,
    GoogleComputeInstanceGroupManagerUpdatePolicy UpdatePolicy = null,
    object WaitForInstances = null,
    string WaitForInstancesStatus = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName">BaseInstanceName</a></code> | <code>string</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name">Name</a></code> | <code>string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version">Version</a></code> | <code>object</code> | version block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | all_instances_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description">Description</a></code> | <code>string</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy">InstanceLifecyclePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | instance_lifecycle_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>string</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort">NamedPort</a></code> | <code>object</code> | named_port block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params">Params</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy">StandbyPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | standby_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk">StatefulDisk</a></code> | <code>object</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp">StatefulExternalIp</a></code> | <code>object</code> | stateful_external_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp">StatefulInternalIp</a></code> | <code>object</code> | stateful_internal_ip block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools">TargetPools</a></code> | <code>string[]</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize">TargetSize</a></code> | <code>double</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize">TargetStoppedSize</a></code> | <code>double</code> | The target number of stopped instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize">TargetSuspendedSize</a></code> | <code>double</code> | The target number of suspended instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances">WaitForInstances</a></code> | <code>object</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>string</code> | When used with wait_for_instances specifies the status to wait for. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone">Zone</a></code> | <code>string</code> | The zone that instances in this group should be created in. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.baseInstanceName"></a>

```csharp
public string BaseInstanceName { get; set; }
```

- *Type:* string

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#base_instance_name GoogleComputeInstanceGroupManager#base_instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.version"></a>

```csharp
public object Version { get; set; }
```

- *Type:* object

version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#version GoogleComputeInstanceGroupManager#version}

---

##### `AllInstancesConfig`<sup>Optional</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.allInstancesConfig"></a>

```csharp
public GoogleComputeInstanceGroupManagerAllInstancesConfig AllInstancesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

all_instances_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#all_instances_config GoogleComputeInstanceGroupManager#all_instances_config}

---

##### `AutoHealingPolicies`<sup>Optional</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```csharp
public GoogleComputeInstanceGroupManagerAutoHealingPolicies AutoHealingPolicies { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#auto_healing_policies GoogleComputeInstanceGroupManager#auto_healing_policies}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#description GoogleComputeInstanceGroupManager#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#id GoogleComputeInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceLifecyclePolicy`<sup>Optional</sup> <a name="InstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.instanceLifecyclePolicy"></a>

```csharp
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy InstanceLifecyclePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

instance_lifecycle_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#instance_lifecycle_policy GoogleComputeInstanceGroupManager#instance_lifecycle_policy}

---

##### `ListManagedInstancesResults`<sup>Optional</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```csharp
public string ListManagedInstancesResults { get; set; }
```

- *Type:* string

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#list_managed_instances_results GoogleComputeInstanceGroupManager#list_managed_instances_results}

---

##### `NamedPort`<sup>Optional</sup> <a name="NamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.namedPort"></a>

```csharp
public object NamedPort { get; set; }
```

- *Type:* object

named_port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#named_port GoogleComputeInstanceGroupManager#named_port}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.params"></a>

```csharp
public GoogleComputeInstanceGroupManagerParams Params { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#params GoogleComputeInstanceGroupManager#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#project GoogleComputeInstanceGroupManager#project}

---

##### `StandbyPolicy`<sup>Optional</sup> <a name="StandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.standbyPolicy"></a>

```csharp
public GoogleComputeInstanceGroupManagerStandbyPolicy StandbyPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

standby_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#standby_policy GoogleComputeInstanceGroupManager#standby_policy}

---

##### `StatefulDisk`<sup>Optional</sup> <a name="StatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulDisk"></a>

```csharp
public object StatefulDisk { get; set; }
```

- *Type:* object

stateful_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#stateful_disk GoogleComputeInstanceGroupManager#stateful_disk}

---

##### `StatefulExternalIp`<sup>Optional</sup> <a name="StatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulExternalIp"></a>

```csharp
public object StatefulExternalIp { get; set; }
```

- *Type:* object

stateful_external_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#stateful_external_ip GoogleComputeInstanceGroupManager#stateful_external_ip}

---

##### `StatefulInternalIp`<sup>Optional</sup> <a name="StatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.statefulInternalIp"></a>

```csharp
public object StatefulInternalIp { get; set; }
```

- *Type:* object

stateful_internal_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#stateful_internal_ip GoogleComputeInstanceGroupManager#stateful_internal_ip}

---

##### `TargetPools`<sup>Optional</sup> <a name="TargetPools" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetPools"></a>

```csharp
public string[] TargetPools { get; set; }
```

- *Type:* string[]

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#target_pools GoogleComputeInstanceGroupManager#target_pools}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSize"></a>

```csharp
public double TargetSize { get; set; }
```

- *Type:* double

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

##### `TargetStoppedSize`<sup>Optional</sup> <a name="TargetStoppedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetStoppedSize"></a>

```csharp
public double TargetStoppedSize { get; set; }
```

- *Type:* double

The target number of stopped instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#target_stopped_size GoogleComputeInstanceGroupManager#target_stopped_size}

---

##### `TargetSuspendedSize`<sup>Optional</sup> <a name="TargetSuspendedSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.targetSuspendedSize"></a>

```csharp
public double TargetSuspendedSize { get; set; }
```

- *Type:* double

The target number of suspended instances for this managed instance group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#target_suspended_size GoogleComputeInstanceGroupManager#target_suspended_size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.timeouts"></a>

```csharp
public GoogleComputeInstanceGroupManagerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts">GoogleComputeInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#timeouts GoogleComputeInstanceGroupManager#timeouts}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.updatePolicy"></a>

```csharp
public GoogleComputeInstanceGroupManagerUpdatePolicy UpdatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#update_policy GoogleComputeInstanceGroupManager#update_policy}

---

##### `WaitForInstances`<sup>Optional</sup> <a name="WaitForInstances" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstances"></a>

```csharp
public object WaitForInstances { get; set; }
```

- *Type:* object

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#wait_for_instances GoogleComputeInstanceGroupManager#wait_for_instances}

---

##### `WaitForInstancesStatus`<sup>Optional</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```csharp
public string WaitForInstancesStatus { get; set; }
```

- *Type:* string

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective and all instances configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#wait_for_instances_status GoogleComputeInstanceGroupManager#wait_for_instances_status}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone that instances in this group should be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#zone GoogleComputeInstanceGroupManager#zone}

---

### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy {
    string DefaultActionOnFailure = null,
    string ForceUpdateOnRepair = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure">DefaultActionOnFailure</a></code> | <code>string</code> | Default behavior for all instance or health check failures. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair">ForceUpdateOnRepair</a></code> | <code>string</code> | Specifies whether to apply the group's latest configuration when repairing a VM. |

---

##### `DefaultActionOnFailure`<sup>Optional</sup> <a name="DefaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.defaultActionOnFailure"></a>

```csharp
public string DefaultActionOnFailure { get; set; }
```

- *Type:* string

Default behavior for all instance or health check failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#default_action_on_failure GoogleComputeInstanceGroupManager#default_action_on_failure}

---

##### `ForceUpdateOnRepair`<sup>Optional</sup> <a name="ForceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy.property.forceUpdateOnRepair"></a>

```csharp
public string ForceUpdateOnRepair { get; set; }
```

- *Type:* string

Specifies whether to apply the group's latest configuration when repairing a VM.

Valid options are: YES, NO. If YES and you updated the group's instance template or per-instance configurations after the VM was created, then these changes are applied when VM is repaired. If NO (default), then updates are applied in accordance with the group's update policy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#force_update_on_repair GoogleComputeInstanceGroupManager#force_update_on_repair}

---

### GoogleComputeInstanceGroupManagerNamedPort <a name="GoogleComputeInstanceGroupManagerNamedPort" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerNamedPort {
    string Name,
    double Port
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name">Name</a></code> | <code>string</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port">Port</a></code> | <code>double</code> | The port number. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPort.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#port GoogleComputeInstanceGroupManager#port}

---

### GoogleComputeInstanceGroupManagerParams <a name="GoogleComputeInstanceGroupManagerParams" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerParams {
    System.Collections.Generic.IDictionary<string, string> ResourceManagerTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource manager tags to bind to the managed instance group. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource manager tags to bind to the managed instance group.

The tags are key-value pairs. Keys must be in the format tagKeys/123 and values in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#resource_manager_tags GoogleComputeInstanceGroupManager#resource_manager_tags}

---

### GoogleComputeInstanceGroupManagerStandbyPolicy <a name="GoogleComputeInstanceGroupManagerStandbyPolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStandbyPolicy {
    double InitialDelaySec = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode">Mode</a></code> | <code>string</code> | Defines how a MIG resumes or starts VMs from a standby pool when the group scales out. |

---

##### `InitialDelaySec`<sup>Optional</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; set; }
```

- *Type:* double

Specifies the number of seconds that the MIG should wait to suspend or stop a VM after that VM was created.

The initial delay gives the initialization script the time to prepare your VM for a quick scale out. The value of initial delay must be between 0 and 3600 seconds. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#initial_delay_sec GoogleComputeInstanceGroupManager#initial_delay_sec}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Defines how a MIG resumes or starts VMs from a standby pool when the group scales out.

The default mode is "MANUAL".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#mode GoogleComputeInstanceGroupManager#mode}

---

### GoogleComputeInstanceGroupManagerStatefulDisk <a name="GoogleComputeInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulDisk {
    string DeviceName,
    string DeleteRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName">DeviceName</a></code> | <code>string</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```csharp
public string DeviceName { get; set; }
```

- *Type:* string

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#device_name GoogleComputeInstanceGroupManager#device_name}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

### GoogleComputeInstanceGroupManagerStatefulExternalIp <a name="GoogleComputeInstanceGroupManagerStatefulExternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulExternalIp {
    string DeleteRule = null,
    string InterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatefulInternalIp <a name="GoogleComputeInstanceGroupManagerStatefulInternalIp" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulInternalIp {
    string DeleteRule = null,
    string InterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule">DeleteRule</a></code> | <code>string</code> | A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName">InterfaceName</a></code> | <code>string</code> | The network interface name. |

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.deleteRule"></a>

```csharp
public string DeleteRule { get; set; }
```

- *Type:* string

A value that prescribes what should happen to an associated static Address resource when a VM instance is permanently deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the IP when the VM is deleted, but do not delete the address resource. ON_PERMANENT_INSTANCE_DELETION will delete the stateful address when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#delete_rule GoogleComputeInstanceGroupManager#delete_rule}

---

##### `InterfaceName`<sup>Optional</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIp.property.interfaceName"></a>

```csharp
public string InterfaceName { get; set; }
```

- *Type:* string

The network interface name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#interface_name GoogleComputeInstanceGroupManager#interface_name}

---

### GoogleComputeInstanceGroupManagerStatus <a name="GoogleComputeInstanceGroupManagerStatus" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatus {

};
```


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfig <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusAllInstancesConfig {

};
```


### GoogleComputeInstanceGroupManagerStatusStateful <a name="GoogleComputeInstanceGroupManagerStatusStateful" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusStateful {

};
```


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs {

};
```


### GoogleComputeInstanceGroupManagerStatusVersionTarget <a name="GoogleComputeInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusVersionTarget {

};
```


### GoogleComputeInstanceGroupManagerTimeouts <a name="GoogleComputeInstanceGroupManagerTimeouts" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#create GoogleComputeInstanceGroupManager#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#delete GoogleComputeInstanceGroupManager#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#update GoogleComputeInstanceGroupManager#update}.

---

### GoogleComputeInstanceGroupManagerUpdatePolicy <a name="GoogleComputeInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerUpdatePolicy {
    string MinimalAction,
    string Type,
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
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction">MinimalAction</a></code> | <code>string</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type">Type</a></code> | <code>string</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>double</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>double</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec">MinReadySec</a></code> | <code>double</code> | Minimum number of seconds to wait for after a newly created instance becomes available. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod">ReplacementMethod</a></code> | <code>string</code> | The instance replacement method for managed instance groups. |

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```csharp
public string MinimalAction { get; set; }
```

- *Type:* string

Minimal action to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#minimal_action GoogleComputeInstanceGroupManager#minimal_action}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#type GoogleComputeInstanceGroupManager#type}

---

##### `MaxSurgeFixed`<sup>Optional</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```csharp
public double MaxSurgeFixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances.

This must be a positive integer. Conflicts with max_surge_percent. Both cannot be 0

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#max_surge_fixed GoogleComputeInstanceGroupManager#max_surge_fixed}

---

##### `MaxSurgePercent`<sup>Optional</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```csharp
public double MaxSurgePercent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. Conflicts with max_surge_fixed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#max_surge_percent GoogleComputeInstanceGroupManager#max_surge_percent}

---

##### `MaxUnavailableFixed`<sup>Optional</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```csharp
public double MaxUnavailableFixed { get; set; }
```

- *Type:* double

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#max_unavailable_fixed GoogleComputeInstanceGroupManager#max_unavailable_fixed}

---

##### `MaxUnavailablePercent`<sup>Optional</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```csharp
public double MaxUnavailablePercent { get; set; }
```

- *Type:* double

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#max_unavailable_percent GoogleComputeInstanceGroupManager#max_unavailable_percent}

---

##### `MinReadySec`<sup>Optional</sup> <a name="MinReadySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.minReadySec"></a>

```csharp
public double MinReadySec { get; set; }
```

- *Type:* double

Minimum number of seconds to wait for after a newly created instance becomes available.

This value must be from range [0, 3600].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#min_ready_sec GoogleComputeInstanceGroupManager#min_ready_sec}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; set; }
```

- *Type:* string

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#most_disruptive_allowed_action GoogleComputeInstanceGroupManager#most_disruptive_allowed_action}

---

##### `ReplacementMethod`<sup>Optional</sup> <a name="ReplacementMethod" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```csharp
public string ReplacementMethod { get; set; }
```

- *Type:* string

The instance replacement method for managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#replacement_method GoogleComputeInstanceGroupManager#replacement_method}

---

### GoogleComputeInstanceGroupManagerVersion <a name="GoogleComputeInstanceGroupManagerVersion" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerVersion {
    string InstanceTemplate,
    string Name = null,
    GoogleComputeInstanceGroupManagerVersionTargetSize TargetSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate">InstanceTemplate</a></code> | <code>string</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name">Name</a></code> | <code>string</code> | Version name. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.instanceTemplate"></a>

```csharp
public string InstanceTemplate { get; set; }
```

- *Type:* string

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#instance_template GoogleComputeInstanceGroupManager#instance_template}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#name GoogleComputeInstanceGroupManager#name}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersion.property.targetSize"></a>

```csharp
public GoogleComputeInstanceGroupManagerVersionTargetSize TargetSize { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#target_size GoogleComputeInstanceGroupManager#target_size}

---

### GoogleComputeInstanceGroupManagerVersionTargetSize <a name="GoogleComputeInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerVersionTargetSize {
    double Fixed = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed">Fixed</a></code> | <code>double</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent">Percent</a></code> | <code>double</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```csharp
public double Fixed { get; set; }
```

- *Type:* double

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#fixed GoogleComputeInstanceGroupManager#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_instance_group_manager#percent GoogleComputeInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerAllInstancesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAllInstancesConfig">GoogleComputeInstanceGroupManagerAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">InitialDelaySecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">HealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```csharp
public string HealthCheckInput { get; }
```

- *Type:* string

---

##### `InitialDelaySecInput`<sup>Optional</sup> <a name="InitialDelaySecInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```csharp
public double InitialDelaySecInput { get; }
```

- *Type:* double

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```csharp
public string HealthCheck { get; }
```

- *Type:* string

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerAutoHealingPolicies InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerAutoHealingPolicies">GoogleComputeInstanceGroupManagerAutoHealingPolicies</a>

---


### GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure">ResetDefaultActionOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair">ResetForceUpdateOnRepair</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultActionOnFailure` <a name="ResetDefaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetDefaultActionOnFailure"></a>

```csharp
private void ResetDefaultActionOnFailure()
```

##### `ResetForceUpdateOnRepair` <a name="ResetForceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resetForceUpdateOnRepair"></a>

```csharp
private void ResetForceUpdateOnRepair()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput">DefaultActionOnFailureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput">ForceUpdateOnRepairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">DefaultActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">ForceUpdateOnRepair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultActionOnFailureInput`<sup>Optional</sup> <a name="DefaultActionOnFailureInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailureInput"></a>

```csharp
public string DefaultActionOnFailureInput { get; }
```

- *Type:* string

---

##### `ForceUpdateOnRepairInput`<sup>Optional</sup> <a name="ForceUpdateOnRepairInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepairInput"></a>

```csharp
public string ForceUpdateOnRepairInput { get; }
```

- *Type:* string

---

##### `DefaultActionOnFailure`<sup>Required</sup> <a name="DefaultActionOnFailure" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```csharp
public string DefaultActionOnFailure { get; }
```

- *Type:* string

---

##### `ForceUpdateOnRepair`<sup>Required</sup> <a name="ForceUpdateOnRepair" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```csharp
public string ForceUpdateOnRepair { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy">GoogleComputeInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### GoogleComputeInstanceGroupManagerNamedPortList <a name="GoogleComputeInstanceGroupManagerNamedPortList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerNamedPortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerNamedPortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerNamedPortOutputReference <a name="GoogleComputeInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerNamedPortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerParamsOutputReference <a name="GoogleComputeInstanceGroupManagerParamsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.resetResourceManagerTags"></a>

```csharp
private void ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.resourceManagerTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ResourceManagerTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerParams">GoogleComputeInstanceGroupManagerParams</a>

---


### GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference <a name="GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec">ResetInitialDelaySec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInitialDelaySec` <a name="ResetInitialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetInitialDelaySec"></a>

```csharp
private void ResetInitialDelaySec()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput">InitialDelaySecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">InitialDelaySec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialDelaySecInput`<sup>Optional</sup> <a name="InitialDelaySecInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySecInput"></a>

```csharp
public double InitialDelaySecInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```csharp
public double InitialDelaySec { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerStandbyPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStandbyPolicy">GoogleComputeInstanceGroupManagerStandbyPolicy</a>

---


### GoogleComputeInstanceGroupManagerStatefulDiskList <a name="GoogleComputeInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulDiskList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatefulDiskOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerStatefulDiskOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```csharp
public string DeviceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulExternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.resetInterfaceName"></a>

```csharp
private void ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpList <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulInternalIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference <a name="GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName">ResetInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetDeleteRule"></a>

```csharp
private void ResetDeleteRule()
```

##### `ResetInterfaceName` <a name="ResetInterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.resetInterfaceName"></a>

```csharp
private void ResetInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput">InterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">InterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRuleInput"></a>

```csharp
public string DeleteRuleInput { get; }
```

- *Type:* string

---

##### `InterfaceNameInput`<sup>Optional</sup> <a name="InterfaceNameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceNameInput"></a>

```csharp
public string InterfaceNameInput { get; }
```

- *Type:* string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `InterfaceName`<sup>Required</sup> <a name="InterfaceName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```csharp
public string InterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">CurrentRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">Effective</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentRevision`<sup>Required</sup> <a name="CurrentRevision" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```csharp
public string CurrentRevision { get; }
```

- *Type:* string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```csharp
public IResolvable Effective { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusAllInstancesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfig">GoogleComputeInstanceGroupManagerStatusAllInstancesConfig</a>

---


### GoogleComputeInstanceGroupManagerStatusList <a name="GoogleComputeInstanceGroupManagerStatusList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusOutputReference <a name="GoogleComputeInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">AllInstancesConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable">IsStable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful">Stateful</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget">VersionTarget</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllInstancesConfig`<sup>Required</sup> <a name="AllInstancesConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList AllInstancesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList">GoogleComputeInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `IsStable`<sup>Required</sup> <a name="IsStable" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```csharp
public IResolvable IsStable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Stateful`<sup>Required</sup> <a name="Stateful" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusStatefulList Stateful { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList">GoogleComputeInstanceGroupManagerStatusStatefulList</a>

---

##### `VersionTarget`<sup>Required</sup> <a name="VersionTarget" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusVersionTargetList VersionTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList">GoogleComputeInstanceGroupManagerStatusVersionTargetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatus">GoogleComputeInstanceGroupManagerStatus</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulList <a name="GoogleComputeInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusStatefulList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatusStatefulOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusStatefulOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusStatefulOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">HasStatefulConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">PerInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HasStatefulConfig`<sup>Required</sup> <a name="HasStatefulConfig" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```csharp
public IResolvable HasStatefulConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PerInstanceConfigs`<sup>Required</sup> <a name="PerInstanceConfigs" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList PerInstanceConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusStateful InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStateful">GoogleComputeInstanceGroupManagerStatusStateful</a>

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">AllEffective</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllEffective`<sup>Required</sup> <a name="AllEffective" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```csharp
public IResolvable AllEffective { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs">GoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetList <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusVersionTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference <a name="GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">IsReached</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsReached`<sup>Required</sup> <a name="IsReached" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```csharp
public IResolvable IsReached { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerStatusVersionTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerStatusVersionTarget">GoogleComputeInstanceGroupManagerStatusVersionTarget</a>

---


### GoogleComputeInstanceGroupManagerTimeoutsOutputReference <a name="GoogleComputeInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference <a name="GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">ResetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">ResetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">ResetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">ResetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec">ResetMinReadySec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">ResetReplacementMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSurgeFixed` <a name="ResetMaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```csharp
private void ResetMaxSurgeFixed()
```

##### `ResetMaxSurgePercent` <a name="ResetMaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```csharp
private void ResetMaxSurgePercent()
```

##### `ResetMaxUnavailableFixed` <a name="ResetMaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```csharp
private void ResetMaxUnavailableFixed()
```

##### `ResetMaxUnavailablePercent` <a name="ResetMaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```csharp
private void ResetMaxUnavailablePercent()
```

##### `ResetMinReadySec` <a name="ResetMinReadySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMinReadySec"></a>

```csharp
private void ResetMinReadySec()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```csharp
private void ResetMostDisruptiveAllowedAction()
```

##### `ResetReplacementMethod` <a name="ResetReplacementMethod" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```csharp
private void ResetReplacementMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">MaxSurgeFixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">MaxSurgePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">MaxUnavailableFixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">MaxUnavailablePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">MinimalActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput">MinReadySecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">ReplacementMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">MinimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec">MinReadySec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">ReplacementMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxSurgeFixedInput`<sup>Optional</sup> <a name="MaxSurgeFixedInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```csharp
public double MaxSurgeFixedInput { get; }
```

- *Type:* double

---

##### `MaxSurgePercentInput`<sup>Optional</sup> <a name="MaxSurgePercentInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```csharp
public double MaxSurgePercentInput { get; }
```

- *Type:* double

---

##### `MaxUnavailableFixedInput`<sup>Optional</sup> <a name="MaxUnavailableFixedInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```csharp
public double MaxUnavailableFixedInput { get; }
```

- *Type:* double

---

##### `MaxUnavailablePercentInput`<sup>Optional</sup> <a name="MaxUnavailablePercentInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```csharp
public double MaxUnavailablePercentInput { get; }
```

- *Type:* double

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```csharp
public string MinimalActionInput { get; }
```

- *Type:* string

---

##### `MinReadySecInput`<sup>Optional</sup> <a name="MinReadySecInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySecInput"></a>

```csharp
public double MinReadySecInput { get; }
```

- *Type:* double

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```csharp
public string MostDisruptiveAllowedActionInput { get; }
```

- *Type:* string

---

##### `ReplacementMethodInput`<sup>Optional</sup> <a name="ReplacementMethodInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```csharp
public string ReplacementMethodInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `MaxSurgeFixed`<sup>Required</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```csharp
public double MaxSurgeFixed { get; }
```

- *Type:* double

---

##### `MaxSurgePercent`<sup>Required</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```csharp
public double MaxSurgePercent { get; }
```

- *Type:* double

---

##### `MaxUnavailableFixed`<sup>Required</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```csharp
public double MaxUnavailableFixed { get; }
```

- *Type:* double

---

##### `MaxUnavailablePercent`<sup>Required</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```csharp
public double MaxUnavailablePercent { get; }
```

- *Type:* double

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```csharp
public string MinimalAction { get; }
```

- *Type:* string

---

##### `MinReadySec`<sup>Required</sup> <a name="MinReadySec" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.minReadySec"></a>

```csharp
public double MinReadySec { get; }
```

- *Type:* double

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```csharp
public string MostDisruptiveAllowedAction { get; }
```

- *Type:* string

---

##### `ReplacementMethod`<sup>Required</sup> <a name="ReplacementMethod" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```csharp
public string ReplacementMethod { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerUpdatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerUpdatePolicy">GoogleComputeInstanceGroupManagerUpdatePolicy</a>

---


### GoogleComputeInstanceGroupManagerVersionList <a name="GoogleComputeInstanceGroupManagerVersionList" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerVersionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get"></a>

```csharp
private GoogleComputeInstanceGroupManagerVersionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerVersionOutputReference <a name="GoogleComputeInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize">PutTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize">ResetTargetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetSize` <a name="PutTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```csharp
private void PutTargetSize(GoogleComputeInstanceGroupManagerVersionTargetSize Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```csharp
private void ResetTargetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">InstanceTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput">TargetSizeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate">InstanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```csharp
public GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference TargetSize { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference">GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `InstanceTemplateInput`<sup>Optional</sup> <a name="InstanceTemplateInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```csharp
public string InstanceTemplateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```csharp
public GoogleComputeInstanceGroupManagerVersionTargetSize TargetSizeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```csharp
public string InstanceTemplate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference <a name="GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```csharp
private void ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">FixedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">Fixed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```csharp
public double FixedInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```csharp
public double Fixed { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeInstanceGroupManagerVersionTargetSize InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstanceGroupManager.GoogleComputeInstanceGroupManagerVersionTargetSize">GoogleComputeInstanceGroupManagerVersionTargetSize</a>

---



