# `googleNotebooksInstance` Submodule <a name="`googleNotebooksInstance` Submodule" id="@cdktf/provider-google-beta.googleNotebooksInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksInstance <a name="GoogleNotebooksInstance" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance google_notebooks_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstance(Construct Scope, string Id, GoogleNotebooksInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig">GoogleNotebooksInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig">GoogleNotebooksInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig">PutAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage">PutVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetAcceleratorConfig">ResetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCustomGpuDriverPath">ResetCustomGpuDriverPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskSizeGb">ResetDataDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskType">ResetDataDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstallGpuDriver">ResetInstallGpuDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstanceOwners">ResetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoProxyAccess">ResetNoProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoPublicIp">ResetNoPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoRemoveDataDisk">ResetNoRemoveDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccountScopes">ResetServiceAccountScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetUpdateTime">ResetUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetVmImage">ResetVmImage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAcceleratorConfig` <a name="PutAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig"></a>

```csharp
private void PutAcceleratorConfig(GoogleNotebooksInstanceAcceleratorConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage"></a>

```csharp
private void PutContainerImage(GoogleNotebooksInstanceContainerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(GoogleNotebooksInstanceReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(GoogleNotebooksInstanceShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNotebooksInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

---

##### `PutVmImage` <a name="PutVmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage"></a>

```csharp
private void PutVmImage(GoogleNotebooksInstanceVmImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---

##### `ResetAcceleratorConfig` <a name="ResetAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetAcceleratorConfig"></a>

```csharp
private void ResetAcceleratorConfig()
```

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCreateTime"></a>

```csharp
private void ResetCreateTime()
```

##### `ResetCustomGpuDriverPath` <a name="ResetCustomGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetCustomGpuDriverPath"></a>

```csharp
private void ResetCustomGpuDriverPath()
```

##### `ResetDataDiskSizeGb` <a name="ResetDataDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskSizeGb"></a>

```csharp
private void ResetDataDiskSizeGb()
```

##### `ResetDataDiskType` <a name="ResetDataDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDataDiskType"></a>

```csharp
private void ResetDataDiskType()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDesiredState"></a>

```csharp
private void ResetDesiredState()
```

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetDiskEncryption"></a>

```csharp
private void ResetDiskEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstallGpuDriver` <a name="ResetInstallGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstallGpuDriver"></a>

```csharp
private void ResetInstallGpuDriver()
```

##### `ResetInstanceOwners` <a name="ResetInstanceOwners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetInstanceOwners"></a>

```csharp
private void ResetInstanceOwners()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetNoProxyAccess` <a name="ResetNoProxyAccess" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoProxyAccess"></a>

```csharp
private void ResetNoProxyAccess()
```

##### `ResetNoPublicIp` <a name="ResetNoPublicIp" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoPublicIp"></a>

```csharp
private void ResetNoPublicIp()
```

##### `ResetNoRemoveDataDisk` <a name="ResetNoRemoveDataDisk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetNoRemoveDataDisk"></a>

```csharp
private void ResetNoRemoveDataDisk()
```

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetPostStartupScript"></a>

```csharp
private void ResetPostStartupScript()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetServiceAccountScopes` <a name="ResetServiceAccountScopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetServiceAccountScopes"></a>

```csharp
private void ResetServiceAccountScopes()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetSubnet"></a>

```csharp
private void ResetSubnet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUpdateTime` <a name="ResetUpdateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetUpdateTime"></a>

```csharp
private void ResetUpdateTime()
```

##### `ResetVmImage` <a name="ResetVmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.resetVmImage"></a>

```csharp
private void ResetVmImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNotebooksInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNotebooksInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNotebooksInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNotebooksInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference">GoogleNotebooksInstanceAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference">GoogleNotebooksInstanceContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.proxyUri">ProxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference">GoogleNotebooksInstanceReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference">GoogleNotebooksInstanceShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference">GoogleNotebooksInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference">GoogleNotebooksInstanceVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfigInput">AcceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTimeInput">CreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPathInput">CustomGpuDriverPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGbInput">DataDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskTypeInput">DataDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriverInput">InstallGpuDriverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwnersInput">InstanceOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccessInput">NoProxyAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIpInput">NoPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDiskInput">NoRemoveDataDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopesInput">ServiceAccountScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTimeInput">UpdateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImageInput">VmImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskType">DataDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryption">DiskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriver">InstallGpuDriver</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwners">InstanceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccess">NoProxyAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIp">NoPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDisk">NoRemoveDataDisk</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AcceleratorConfig`<sup>Required</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfig"></a>

```csharp
public GoogleNotebooksInstanceAcceleratorConfigOutputReference AcceleratorConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference">GoogleNotebooksInstanceAcceleratorConfigOutputReference</a>

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImage"></a>

```csharp
public GoogleNotebooksInstanceContainerImageOutputReference ContainerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference">GoogleNotebooksInstanceContainerImageOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ProxyUri`<sup>Required</sup> <a name="ProxyUri" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.proxyUri"></a>

```csharp
public string ProxyUri { get; }
```

- *Type:* string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinity"></a>

```csharp
public GoogleNotebooksInstanceReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference">GoogleNotebooksInstanceReservationAffinityOutputReference</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfig"></a>

```csharp
public GoogleNotebooksInstanceShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference">GoogleNotebooksInstanceShieldedInstanceConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeouts"></a>

```csharp
public GoogleNotebooksInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference">GoogleNotebooksInstanceTimeoutsOutputReference</a>

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImage"></a>

```csharp
public GoogleNotebooksInstanceVmImageOutputReference VmImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference">GoogleNotebooksInstanceVmImageOutputReference</a>

---

##### `AcceleratorConfigInput`<sup>Optional</sup> <a name="AcceleratorConfigInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.acceleratorConfigInput"></a>

```csharp
public GoogleNotebooksInstanceAcceleratorConfig AcceleratorConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.containerImageInput"></a>

```csharp
public GoogleNotebooksInstanceContainerImage ContainerImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTimeInput"></a>

```csharp
public string CreateTimeInput { get; }
```

- *Type:* string

---

##### `CustomGpuDriverPathInput`<sup>Optional</sup> <a name="CustomGpuDriverPathInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPathInput"></a>

```csharp
public string CustomGpuDriverPathInput { get; }
```

- *Type:* string

---

##### `DataDiskSizeGbInput`<sup>Optional</sup> <a name="DataDiskSizeGbInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGbInput"></a>

```csharp
public double DataDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `DataDiskTypeInput`<sup>Optional</sup> <a name="DataDiskTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskTypeInput"></a>

```csharp
public string DataDiskTypeInput { get; }
```

- *Type:* string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryptionInput"></a>

```csharp
public string DiskEncryptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstallGpuDriverInput`<sup>Optional</sup> <a name="InstallGpuDriverInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriverInput"></a>

```csharp
public object InstallGpuDriverInput { get; }
```

- *Type:* object

---

##### `InstanceOwnersInput`<sup>Optional</sup> <a name="InstanceOwnersInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwnersInput"></a>

```csharp
public string[] InstanceOwnersInput { get; }
```

- *Type:* string[]

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `NoProxyAccessInput`<sup>Optional</sup> <a name="NoProxyAccessInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccessInput"></a>

```csharp
public object NoProxyAccessInput { get; }
```

- *Type:* object

---

##### `NoPublicIpInput`<sup>Optional</sup> <a name="NoPublicIpInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIpInput"></a>

```csharp
public object NoPublicIpInput { get; }
```

- *Type:* object

---

##### `NoRemoveDataDiskInput`<sup>Optional</sup> <a name="NoRemoveDataDiskInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDiskInput"></a>

```csharp
public object NoRemoveDataDiskInput { get; }
```

- *Type:* object

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScriptInput"></a>

```csharp
public string PostStartupScriptInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.reservationAffinityInput"></a>

```csharp
public GoogleNotebooksInstanceReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceAccountScopesInput`<sup>Optional</sup> <a name="ServiceAccountScopesInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopesInput"></a>

```csharp
public string[] ServiceAccountScopesInput { get; }
```

- *Type:* string[]

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.shieldedInstanceConfigInput"></a>

```csharp
public GoogleNotebooksInstanceShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UpdateTimeInput`<sup>Optional</sup> <a name="UpdateTimeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTimeInput"></a>

```csharp
public string UpdateTimeInput { get; }
```

- *Type:* string

---

##### `VmImageInput`<sup>Optional</sup> <a name="VmImageInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.vmImageInput"></a>

```csharp
public GoogleNotebooksInstanceVmImage VmImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomGpuDriverPath`<sup>Required</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.customGpuDriverPath"></a>

```csharp
public string CustomGpuDriverPath { get; }
```

- *Type:* string

---

##### `DataDiskSizeGb`<sup>Required</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskSizeGb"></a>

```csharp
public double DataDiskSizeGb { get; }
```

- *Type:* double

---

##### `DataDiskType`<sup>Required</sup> <a name="DataDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.dataDiskType"></a>

```csharp
public string DataDiskType { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.diskEncryption"></a>

```csharp
public string DiskEncryption { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstallGpuDriver`<sup>Required</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.installGpuDriver"></a>

```csharp
public object InstallGpuDriver { get; }
```

- *Type:* object

---

##### `InstanceOwners`<sup>Required</sup> <a name="InstanceOwners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.instanceOwners"></a>

```csharp
public string[] InstanceOwners { get; }
```

- *Type:* string[]

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `NoProxyAccess`<sup>Required</sup> <a name="NoProxyAccess" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noProxyAccess"></a>

```csharp
public object NoProxyAccess { get; }
```

- *Type:* object

---

##### `NoPublicIp`<sup>Required</sup> <a name="NoPublicIp" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noPublicIp"></a>

```csharp
public object NoPublicIp { get; }
```

- *Type:* object

---

##### `NoRemoveDataDisk`<sup>Required</sup> <a name="NoRemoveDataDisk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.noRemoveDataDisk"></a>

```csharp
public object NoRemoveDataDisk { get; }
```

- *Type:* object

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `ServiceAccountScopes`<sup>Required</sup> <a name="ServiceAccountScopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.serviceAccountScopes"></a>

```csharp
public string[] ServiceAccountScopes { get; }
```

- *Type:* string[]

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksInstanceAcceleratorConfig <a name="GoogleNotebooksInstanceAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceAcceleratorConfig {
    double CoreCount,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.coreCount">CoreCount</a></code> | <code>double</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.type">Type</a></code> | <code>string</code> | Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"]. |

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.coreCount"></a>

```csharp
public double CoreCount { get; set; }
```

- *Type:* double

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#core_count GoogleNotebooksInstance#core_count}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of this accelerator. Possible values: ["ACCELERATOR_TYPE_UNSPECIFIED", "NVIDIA_TESLA_K80", "NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS", "NVIDIA_TESLA_A100", "TPU_V2", "TPU_V3"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#type GoogleNotebooksInstance#type}

---

### GoogleNotebooksInstanceConfig <a name="GoogleNotebooksInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string MachineType,
    string Name,
    GoogleNotebooksInstanceAcceleratorConfig AcceleratorConfig = null,
    double BootDiskSizeGb = null,
    string BootDiskType = null,
    GoogleNotebooksInstanceContainerImage ContainerImage = null,
    string CreateTime = null,
    string CustomGpuDriverPath = null,
    double DataDiskSizeGb = null,
    string DataDiskType = null,
    string DesiredState = null,
    string DiskEncryption = null,
    string Id = null,
    object InstallGpuDriver = null,
    string[] InstanceOwners = null,
    string KmsKey = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Network = null,
    string NicType = null,
    object NoProxyAccess = null,
    object NoPublicIp = null,
    object NoRemoveDataDisk = null,
    string PostStartupScript = null,
    string Project = null,
    GoogleNotebooksInstanceReservationAffinity ReservationAffinity = null,
    string ServiceAccount = null,
    string[] ServiceAccountScopes = null,
    GoogleNotebooksInstanceShieldedInstanceConfig ShieldedInstanceConfig = null,
    string Subnet = null,
    string[] Tags = null,
    GoogleNotebooksInstanceTimeouts Timeouts = null,
    string UpdateTime = null,
    GoogleNotebooksInstanceVmImage VmImage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.location">Location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.machineType">MachineType</a></code> | <code>string</code> | A reference to a machine type which defines VM kind. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.name">Name</a></code> | <code>string</code> | The name specified for the Notebook instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.createTime">CreateTime</a></code> | <code>string</code> | Instance creation time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>string</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskSizeGb">DataDiskSizeGb</a></code> | <code>double</code> | The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskType">DataDiskType</a></code> | <code>string</code> | Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.desiredState">DesiredState</a></code> | <code>string</code> | Desired state of the Notebook Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.diskEncryption">DiskEncryption</a></code> | <code>string</code> | Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.installGpuDriver">InstallGpuDriver</a></code> | <code>object</code> | Whether the end user authorizes Google Cloud to install GPU driver on this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.instanceOwners">InstanceOwners</a></code> | <code>string[]</code> | The list of owners of this instance after creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.network">Network</a></code> | <code>string</code> | The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.nicType">NicType</a></code> | <code>string</code> | The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noProxyAccess">NoProxyAccess</a></code> | <code>object</code> | The notebook instance will not register with the proxy.. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noPublicIp">NoPublicIp</a></code> | <code>object</code> | No public IP will be assigned to this instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noRemoveDataDisk">NoRemoveDataDisk</a></code> | <code>object</code> | If true, the data disk will not be auto deleted when deleting the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The service account on this instance, giving access to other Google Cloud services. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccountScopes">ServiceAccountScopes</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.subnet">Subnet</a></code> | <code>string</code> | The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.tags">Tags</a></code> | <code>string[]</code> | The Compute Engine tags to add to instance. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | Instance update time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | vm_image block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#location GoogleNotebooksInstance#location}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

A reference to a machine type which defines VM kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#machine_type GoogleNotebooksInstance#machine_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name specified for the Notebook instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#name GoogleNotebooksInstance#name}

---

##### `AcceleratorConfig`<sup>Optional</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.acceleratorConfig"></a>

```csharp
public GoogleNotebooksInstanceAcceleratorConfig AcceleratorConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#accelerator_config GoogleNotebooksInstance#accelerator_config}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

The size of the boot disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

The minimum recommended value is 100 GB.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#boot_disk_size_gb GoogleNotebooksInstance#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#boot_disk_type GoogleNotebooksInstance#boot_disk_type}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.containerImage"></a>

```csharp
public GoogleNotebooksInstanceContainerImage ContainerImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#container_image GoogleNotebooksInstance#container_image}

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.createTime"></a>

```csharp
public string CreateTime { get; set; }
```

- *Type:* string

Instance creation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#create_time GoogleNotebooksInstance#create_time}

---

##### `CustomGpuDriverPath`<sup>Optional</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.customGpuDriverPath"></a>

```csharp
public string CustomGpuDriverPath { get; set; }
```

- *Type:* string

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#custom_gpu_driver_path GoogleNotebooksInstance#custom_gpu_driver_path}

---

##### `DataDiskSizeGb`<sup>Optional</sup> <a name="DataDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskSizeGb"></a>

```csharp
public double DataDiskSizeGb { get; set; }
```

- *Type:* double

The size of the data disk in GB attached to this instance, up to a maximum of 64000 GB (64 TB).

You can choose the size of the data disk based on how big your notebooks and data are.
If not specified, this defaults to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#data_disk_size_gb GoogleNotebooksInstance#data_disk_size_gb}

---

##### `DataDiskType`<sup>Optional</sup> <a name="DataDiskType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.dataDiskType"></a>

```csharp
public string DataDiskType { get; set; }
```

- *Type:* string

Possible disk types for notebook instances. Possible values: ["DISK_TYPE_UNSPECIFIED", "PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#data_disk_type GoogleNotebooksInstance#data_disk_type}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Desired state of the Notebook Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#desired_state GoogleNotebooksInstance#desired_state}

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.diskEncryption"></a>

```csharp
public string DiskEncryption { get; set; }
```

- *Type:* string

Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["DISK_ENCRYPTION_UNSPECIFIED", "GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#disk_encryption GoogleNotebooksInstance#disk_encryption}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#id GoogleNotebooksInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallGpuDriver`<sup>Optional</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.installGpuDriver"></a>

```csharp
public object InstallGpuDriver { get; set; }
```

- *Type:* object

Whether the end user authorizes Google Cloud to install GPU driver on this instance.

If this field is empty or set to false, the GPU driver
won't be installed. Only applicable to instances with GPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#install_gpu_driver GoogleNotebooksInstance#install_gpu_driver}

---

##### `InstanceOwners`<sup>Optional</sup> <a name="InstanceOwners" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.instanceOwners"></a>

```csharp
public string[] InstanceOwners { get; set; }
```

- *Type:* string[]

The list of owners of this instance after creation.

Format: alias@example.com.
Currently supports one owner only.
If not specified, all of the service account users of
your VM instance's service account can use the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#instance_owners GoogleNotebooksInstance#instance_owners}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The KMS key used to encrypt the disks, only applicable if diskEncryption is CMEK. Format: projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#kms_key GoogleNotebooksInstance#kms_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this instance.

These can be later modified by the setLabels method.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#labels GoogleNotebooksInstance#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Custom metadata to apply to this instance.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#metadata GoogleNotebooksInstance#metadata}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC that this instance is in. Format: projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#network GoogleNotebooksInstance#network}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

The type of vNIC driver. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#nic_type GoogleNotebooksInstance#nic_type}

---

##### `NoProxyAccess`<sup>Optional</sup> <a name="NoProxyAccess" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noProxyAccess"></a>

```csharp
public object NoProxyAccess { get; set; }
```

- *Type:* object

The notebook instance will not register with the proxy..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#no_proxy_access GoogleNotebooksInstance#no_proxy_access}

---

##### `NoPublicIp`<sup>Optional</sup> <a name="NoPublicIp" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noPublicIp"></a>

```csharp
public object NoPublicIp { get; set; }
```

- *Type:* object

No public IP will be assigned to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#no_public_ip GoogleNotebooksInstance#no_public_ip}

---

##### `NoRemoveDataDisk`<sup>Optional</sup> <a name="NoRemoveDataDisk" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.noRemoveDataDisk"></a>

```csharp
public object NoRemoveDataDisk { get; set; }
```

- *Type:* object

If true, the data disk will not be auto deleted when deleting the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#no_remove_data_disk GoogleNotebooksInstance#no_remove_data_disk}

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; set; }
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL
or Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#post_startup_script GoogleNotebooksInstance#post_startup_script}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}.

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.reservationAffinity"></a>

```csharp
public GoogleNotebooksInstanceReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#reservation_affinity GoogleNotebooksInstance#reservation_affinity}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The service account on this instance, giving access to other Google Cloud services.

You can use any service account within
the same project, but you must have the service account user
permission to use the instance. If not specified,
the Compute Engine default service account is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#service_account GoogleNotebooksInstance#service_account}

---

##### `ServiceAccountScopes`<sup>Optional</sup> <a name="ServiceAccountScopes" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.serviceAccountScopes"></a>

```csharp
public string[] ServiceAccountScopes { get; set; }
```

- *Type:* string[]

Optional.

The URIs of service account scopes to be included in Compute Engine instances.
If not specified, the following scopes are defined:

* https://www.googleapis.com/auth/cloud-platform
* https://www.googleapis.com/auth/userinfo.email

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#service_account_scopes GoogleNotebooksInstance#service_account_scopes}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.shieldedInstanceConfig"></a>

```csharp
public GoogleNotebooksInstanceShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#shielded_instance_config GoogleNotebooksInstance#shielded_instance_config}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

The name of the subnet that this instance is in. Format: projects/{project_id}/regions/{region}/subnetworks/{subnetwork_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#subnet GoogleNotebooksInstance#subnet}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The Compute Engine tags to add to instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#tags GoogleNotebooksInstance#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.timeouts"></a>

```csharp
public GoogleNotebooksInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts">GoogleNotebooksInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#timeouts GoogleNotebooksInstance#timeouts}

---

##### `UpdateTime`<sup>Optional</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; set; }
```

- *Type:* string

Instance update time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#update_time GoogleNotebooksInstance#update_time}

---

##### `VmImage`<sup>Optional</sup> <a name="VmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceConfig.property.vmImage"></a>

```csharp
public GoogleNotebooksInstanceVmImage VmImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#vm_image GoogleNotebooksInstance#vm_image}

---

### GoogleNotebooksInstanceContainerImage <a name="GoogleNotebooksInstanceContainerImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceContainerImage {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#repository GoogleNotebooksInstance#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#tag GoogleNotebooksInstance#tag}

---

### GoogleNotebooksInstanceReservationAffinity <a name="GoogleNotebooksInstanceReservationAffinity" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceReservationAffinity {
    string ConsumeReservationType,
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.consumeReservationType">ConsumeReservationType</a></code> | <code>string</code> | The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of reservation resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of reservation resource. |

---

##### `ConsumeReservationType`<sup>Required</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.consumeReservationType"></a>

```csharp
public string ConsumeReservationType { get; set; }
```

- *Type:* string

The type of Compute Reservation. Possible values: ["NO_RESERVATION", "ANY_RESERVATION", "SPECIFIC_RESERVATION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#consume_reservation_type GoogleNotebooksInstance#consume_reservation_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#key GoogleNotebooksInstance#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#values GoogleNotebooksInstance#values}

---

### GoogleNotebooksInstanceShieldedInstanceConfig <a name="GoogleNotebooksInstanceShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Defines whether the instance has Secure Boot enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the
boot integrity of the instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image when the instance is created.
Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#enable_integrity_monitoring GoogleNotebooksInstance#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Defines whether the instance has Secure Boot enabled.

Secure Boot helps ensure that the system only runs
authentic software by verifying the digital signature of all boot components, and halting the boot process
if signature verification fails.
Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#enable_secure_boot GoogleNotebooksInstance#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#enable_vtpm GoogleNotebooksInstance#enable_vtpm}

---

### GoogleNotebooksInstanceTimeouts <a name="GoogleNotebooksInstanceTimeouts" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#create GoogleNotebooksInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#delete GoogleNotebooksInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#update GoogleNotebooksInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#create GoogleNotebooksInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#delete GoogleNotebooksInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#update GoogleNotebooksInstance#update}.

---

### GoogleNotebooksInstanceVmImage <a name="GoogleNotebooksInstanceVmImage" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceVmImage {
    string Project,
    string ImageFamily = null,
    string ImageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.project">Project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageFamily">ImageFamily</a></code> | <code>string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageName">ImageName</a></code> | <code>string</code> | Use VM image name to find the image. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#project GoogleNotebooksInstance#project}

---

##### `ImageFamily`<sup>Optional</sup> <a name="ImageFamily" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageFamily"></a>

```csharp
public string ImageFamily { get; set; }
```

- *Type:* string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#image_family GoogleNotebooksInstance#image_family}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_notebooks_instance#image_name GoogleNotebooksInstance#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNotebooksInstanceAcceleratorConfigOutputReference <a name="GoogleNotebooksInstanceAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceAcceleratorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCount">CoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCountInput"></a>

```csharp
public double CoreCountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.coreCount"></a>

```csharp
public double CoreCount { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksInstanceAcceleratorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceAcceleratorConfig">GoogleNotebooksInstanceAcceleratorConfig</a>

---


### GoogleNotebooksInstanceContainerImageOutputReference <a name="GoogleNotebooksInstanceContainerImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceContainerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImageOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksInstanceContainerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceContainerImage">GoogleNotebooksInstanceContainerImage</a>

---


### GoogleNotebooksInstanceReservationAffinityOutputReference <a name="GoogleNotebooksInstanceReservationAffinityOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput">ConsumeReservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType">ConsumeReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumeReservationTypeInput`<sup>Optional</sup> <a name="ConsumeReservationTypeInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationTypeInput"></a>

```csharp
public string ConsumeReservationTypeInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `ConsumeReservationType`<sup>Required</sup> <a name="ConsumeReservationType" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.consumeReservationType"></a>

```csharp
public string ConsumeReservationType { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksInstanceReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceReservationAffinity">GoogleNotebooksInstanceReservationAffinity</a>

---


### GoogleNotebooksInstanceShieldedInstanceConfigOutputReference <a name="GoogleNotebooksInstanceShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksInstanceShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceShieldedInstanceConfig">GoogleNotebooksInstanceShieldedInstanceConfig</a>

---


### GoogleNotebooksInstanceTimeoutsOutputReference <a name="GoogleNotebooksInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNotebooksInstanceVmImageOutputReference <a name="GoogleNotebooksInstanceVmImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksInstanceVmImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageFamily">ResetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageFamily` <a name="ResetImageFamily" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageFamily"></a>

```csharp
private void ResetImageFamily()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.resetImageName"></a>

```csharp
private void ResetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamilyInput">ImageFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamily">ImageFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageFamilyInput`<sup>Optional</sup> <a name="ImageFamilyInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamilyInput"></a>

```csharp
public string ImageFamilyInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ImageFamily`<sup>Required</sup> <a name="ImageFamily" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageFamily"></a>

```csharp
public string ImageFamily { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImageOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksInstanceVmImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksInstance.GoogleNotebooksInstanceVmImage">GoogleNotebooksInstanceVmImage</a>

---



