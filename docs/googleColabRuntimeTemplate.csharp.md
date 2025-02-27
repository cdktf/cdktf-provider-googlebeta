# `googleColabRuntimeTemplate` Submodule <a name="`googleColabRuntimeTemplate` Submodule" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabRuntimeTemplate <a name="GoogleColabRuntimeTemplate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplate(Construct Scope, string Id, GoogleColabRuntimeTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig">GoogleColabRuntimeTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig">GoogleColabRuntimeTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec">PutDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig">PutEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig">PutIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec">PutNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig">PutShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec">ResetDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig">ResetEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig">ResetIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec">ResetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig">ResetShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataPersistentDiskSpec` <a name="PutDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```csharp
private void PutDataPersistentDiskSpec(GoogleColabRuntimeTemplateDataPersistentDiskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleColabRuntimeTemplateEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---

##### `PutEucConfig` <a name="PutEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig"></a>

```csharp
private void PutEucConfig(GoogleColabRuntimeTemplateEucConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---

##### `PutIdleShutdownConfig` <a name="PutIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig"></a>

```csharp
private void PutIdleShutdownConfig(GoogleColabRuntimeTemplateIdleShutdownConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec"></a>

```csharp
private void PutMachineSpec(GoogleColabRuntimeTemplateMachineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---

##### `PutNetworkSpec` <a name="PutNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec"></a>

```csharp
private void PutNetworkSpec(GoogleColabRuntimeTemplateNetworkSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---

##### `PutShieldedVmConfig` <a name="PutShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig"></a>

```csharp
private void PutShieldedVmConfig(GoogleColabRuntimeTemplateShieldedVmConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig"></a>

```csharp
private void PutSoftwareConfig(GoogleColabRuntimeTemplateSoftwareConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleColabRuntimeTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

---

##### `ResetDataPersistentDiskSpec` <a name="ResetDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```csharp
private void ResetDataPersistentDiskSpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetEucConfig` <a name="ResetEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig"></a>

```csharp
private void ResetEucConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdleShutdownConfig` <a name="ResetIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```csharp
private void ResetIdleShutdownConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec"></a>

```csharp
private void ResetMachineSpec()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkSpec` <a name="ResetNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec"></a>

```csharp
private void ResetNetworkSpec()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags"></a>

```csharp
private void ResetNetworkTags()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetShieldedVmConfig` <a name="ResetShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig"></a>

```csharp
private void ResetShieldedVmConfig()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig"></a>

```csharp
private void ResetSoftwareConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleColabRuntimeTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleColabRuntimeTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleColabRuntimeTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleColabRuntimeTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleColabRuntimeTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec">DataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig">EucConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig">IdleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig">ShieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput">DataPersistentDiskSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput">EucConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput">IdleShutdownConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput">NetworkSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput">NetworkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput">ShieldedVmConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataPersistentDiskSpec`<sup>Required</sup> <a name="DataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```csharp
public GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference DataPersistentDiskSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec"></a>

```csharp
public GoogleColabRuntimeTemplateEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `EucConfig`<sup>Required</sup> <a name="EucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig"></a>

```csharp
public GoogleColabRuntimeTemplateEucConfigOutputReference EucConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `IdleShutdownConfig`<sup>Required</sup> <a name="IdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig"></a>

```csharp
public GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference IdleShutdownConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec"></a>

```csharp
public GoogleColabRuntimeTemplateMachineSpecOutputReference MachineSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `NetworkSpec`<sup>Required</sup> <a name="NetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec"></a>

```csharp
public GoogleColabRuntimeTemplateNetworkSpecOutputReference NetworkSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `ShieldedVmConfig`<sup>Required</sup> <a name="ShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig"></a>

```csharp
public GoogleColabRuntimeTemplateShieldedVmConfigOutputReference ShieldedVmConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfigOutputReference SoftwareConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts"></a>

```csharp
public GoogleColabRuntimeTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `DataPersistentDiskSpecInput`<sup>Optional</sup> <a name="DataPersistentDiskSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```csharp
public GoogleColabRuntimeTemplateDataPersistentDiskSpec DataPersistentDiskSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput"></a>

```csharp
public GoogleColabRuntimeTemplateEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---

##### `EucConfigInput`<sup>Optional</sup> <a name="EucConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput"></a>

```csharp
public GoogleColabRuntimeTemplateEucConfig EucConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdleShutdownConfigInput`<sup>Optional</sup> <a name="IdleShutdownConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```csharp
public GoogleColabRuntimeTemplateIdleShutdownConfig IdleShutdownConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput"></a>

```csharp
public GoogleColabRuntimeTemplateMachineSpec MachineSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkSpecInput`<sup>Optional</sup> <a name="NetworkSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput"></a>

```csharp
public GoogleColabRuntimeTemplateNetworkSpec NetworkSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput"></a>

```csharp
public string[] NetworkTagsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ShieldedVmConfigInput`<sup>Optional</sup> <a name="ShieldedVmConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```csharp
public GoogleColabRuntimeTemplateShieldedVmConfig ShieldedVmConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfig SoftwareConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabRuntimeTemplateConfig <a name="GoogleColabRuntimeTemplateConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    GoogleColabRuntimeTemplateDataPersistentDiskSpec DataPersistentDiskSpec = null,
    string Description = null,
    GoogleColabRuntimeTemplateEncryptionSpec EncryptionSpec = null,
    GoogleColabRuntimeTemplateEucConfig EucConfig = null,
    string Id = null,
    GoogleColabRuntimeTemplateIdleShutdownConfig IdleShutdownConfig = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleColabRuntimeTemplateMachineSpec MachineSpec = null,
    string Name = null,
    GoogleColabRuntimeTemplateNetworkSpec NetworkSpec = null,
    string[] NetworkTags = null,
    string Project = null,
    GoogleColabRuntimeTemplateShieldedVmConfig ShieldedVmConfig = null,
    GoogleColabRuntimeTemplateSoftwareConfig SoftwareConfig = null,
    GoogleColabRuntimeTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">DataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description">Description</a></code> | <code>string</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig">EucConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig">IdleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec">NetworkSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig">ShieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#display_name GoogleColabRuntimeTemplate#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#location GoogleColabRuntimeTemplate#location}

---

##### `DataPersistentDiskSpec`<sup>Optional</sup> <a name="DataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```csharp
public GoogleColabRuntimeTemplateDataPersistentDiskSpec DataPersistentDiskSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#data_persistent_disk_spec GoogleColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#description GoogleColabRuntimeTemplate#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```csharp
public GoogleColabRuntimeTemplateEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#encryption_spec GoogleColabRuntimeTemplate#encryption_spec}

---

##### `EucConfig`<sup>Optional</sup> <a name="EucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig"></a>

```csharp
public GoogleColabRuntimeTemplateEucConfig EucConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#euc_config GoogleColabRuntimeTemplate#euc_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdleShutdownConfig`<sup>Optional</sup> <a name="IdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```csharp
public GoogleColabRuntimeTemplateIdleShutdownConfig IdleShutdownConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#idle_shutdown_config GoogleColabRuntimeTemplate#idle_shutdown_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#labels GoogleColabRuntimeTemplate#labels}

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec"></a>

```csharp
public GoogleColabRuntimeTemplateMachineSpec MachineSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#machine_spec GoogleColabRuntimeTemplate#machine_spec}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `NetworkSpec`<sup>Optional</sup> <a name="NetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec"></a>

```csharp
public GoogleColabRuntimeTemplateNetworkSpec NetworkSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#network_spec GoogleColabRuntimeTemplate#network_spec}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; set; }
```

- *Type:* string[]

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#network_tags GoogleColabRuntimeTemplate#network_tags}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}.

---

##### `ShieldedVmConfig`<sup>Optional</sup> <a name="ShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```csharp
public GoogleColabRuntimeTemplateShieldedVmConfig ShieldedVmConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#shielded_vm_config GoogleColabRuntimeTemplate#shielded_vm_config}

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfig SoftwareConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#software_config GoogleColabRuntimeTemplate#software_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts"></a>

```csharp
public GoogleColabRuntimeTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#timeouts GoogleColabRuntimeTemplate#timeouts}

---

### GoogleColabRuntimeTemplateDataPersistentDiskSpec <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateDataPersistentDiskSpec {
    string DiskSizeGb = null,
    string DiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">DiskType</a></code> | <code>string</code> | The type of the persistent disk. |

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; set; }
```

- *Type:* string

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#disk_size_gb GoogleColabRuntimeTemplate#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#disk_type GoogleColabRuntimeTemplate#disk_type}

---

### GoogleColabRuntimeTemplateEncryptionSpec <a name="GoogleColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateEncryptionSpec {
    string KmsKeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#kms_key_name GoogleColabRuntimeTemplate#kms_key_name}

---

### GoogleColabRuntimeTemplateEucConfig <a name="GoogleColabRuntimeTemplateEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateEucConfig {
    object EucDisabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled">EucDisabled</a></code> | <code>object</code> | Disable end user credential access for the runtime. |

---

##### `EucDisabled`<sup>Optional</sup> <a name="EucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```csharp
public object EucDisabled { get; set; }
```

- *Type:* object

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#euc_disabled GoogleColabRuntimeTemplate#euc_disabled}

---

### GoogleColabRuntimeTemplateIdleShutdownConfig <a name="GoogleColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateIdleShutdownConfig {
    string IdleTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | The duration after which the runtime is automatically shut down. |

---

##### `IdleTimeout`<sup>Optional</sup> <a name="IdleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; set; }
```

- *Type:* string

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#idle_timeout GoogleColabRuntimeTemplate#idle_timeout}

---

### GoogleColabRuntimeTemplateMachineSpec <a name="GoogleColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateMachineSpec {
    double AcceleratorCount = null,
    string AcceleratorType = null,
    string MachineType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType">MachineType</a></code> | <code>string</code> | The Compute Engine machine type selected for the runtime. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#accelerator_count GoogleColabRuntimeTemplate#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#accelerator_type GoogleColabRuntimeTemplate#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#machine_type GoogleColabRuntimeTemplate#machine_type}

---

### GoogleColabRuntimeTemplateNetworkSpec <a name="GoogleColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateNetworkSpec {
    object EnableInternetAccess = null,
    string Network = null,
    string Subnetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>object</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network">Network</a></code> | <code>string</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name of the subnetwork that this runtime is in. |

---

##### `EnableInternetAccess`<sup>Optional</sup> <a name="EnableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```csharp
public object EnableInternetAccess { get; set; }
```

- *Type:* object

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#enable_internet_access GoogleColabRuntimeTemplate#enable_internet_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#network GoogleColabRuntimeTemplate#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#subnetwork GoogleColabRuntimeTemplate#subnetwork}

---

### GoogleColabRuntimeTemplateShieldedVmConfig <a name="GoogleColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateShieldedVmConfig {
    object EnableSecureBoot = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Enables secure boot for the runtime. |

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#enable_secure_boot GoogleColabRuntimeTemplate#enable_secure_boot}

---

### GoogleColabRuntimeTemplateSoftwareConfig <a name="GoogleColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateSoftwareConfig {
    object Env = null,
    GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig PostStartupScriptConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env">Env</a></code> | <code>object</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">PostStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env"></a>

```csharp
public object Env { get; set; }
```

- *Type:* object

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#env GoogleColabRuntimeTemplate#env}

---

##### `PostStartupScriptConfig`<sup>Optional</sup> <a name="PostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig PostStartupScriptConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#post_startup_script_config GoogleColabRuntimeTemplate#post_startup_script_config}

---

### GoogleColabRuntimeTemplateSoftwareConfigEnv <a name="GoogleColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateSoftwareConfigEnv {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value">Value</a></code> | <code>string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#value GoogleColabRuntimeTemplate#value}

---

### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig {
    string PostStartupScript = null,
    string PostStartupScriptBehavior = null,
    string PostStartupScriptUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">PostStartupScriptUrl</a></code> | <code>string</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; set; }
```

- *Type:* string

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#post_startup_script GoogleColabRuntimeTemplate#post_startup_script}

---

##### `PostStartupScriptBehavior`<sup>Optional</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; set; }
```

- *Type:* string

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#post_startup_script_behavior GoogleColabRuntimeTemplate#post_startup_script_behavior}

---

##### `PostStartupScriptUrl`<sup>Optional</sup> <a name="PostStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```csharp
public string PostStartupScriptUrl { get; set; }
```

- *Type:* string

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#post_startup_script_url GoogleColabRuntimeTemplate#post_startup_script_url}

---

### GoogleColabRuntimeTemplateTimeouts <a name="GoogleColabRuntimeTemplateTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```csharp
public string DiskSizeGbInput { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateDataPersistentDiskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### GoogleColabRuntimeTemplateEncryptionSpecOutputReference <a name="GoogleColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---


### GoogleColabRuntimeTemplateEucConfigOutputReference <a name="GoogleColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateEucConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">ResetEucDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEucDisabled` <a name="ResetEucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```csharp
private void ResetEucDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">EucDisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">EucDisabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EucDisabledInput`<sup>Optional</sup> <a name="EucDisabledInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```csharp
public object EucDisabledInput { get; }
```

- *Type:* object

---

##### `EucDisabled`<sup>Required</sup> <a name="EucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```csharp
public object EucDisabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateEucConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---


### GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">ResetIdleTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeout` <a name="ResetIdleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```csharp
private void ResetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">IdleTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">IdleTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleTimeoutInput`<sup>Optional</sup> <a name="IdleTimeoutInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```csharp
public string IdleTimeoutInput { get; }
```

- *Type:* string

---

##### `IdleTimeout`<sup>Required</sup> <a name="IdleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```csharp
public string IdleTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateIdleShutdownConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---


### GoogleColabRuntimeTemplateMachineSpecOutputReference <a name="GoogleColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---


### GoogleColabRuntimeTemplateNetworkSpecOutputReference <a name="GoogleColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateNetworkSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">ResetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableInternetAccess` <a name="ResetEnableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```csharp
private void ResetEnableInternetAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">EnableInternetAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">EnableInternetAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInternetAccessInput`<sup>Optional</sup> <a name="EnableInternetAccessInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```csharp
public object EnableInternetAccessInput { get; }
```

- *Type:* object

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `EnableInternetAccess`<sup>Required</sup> <a name="EnableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```csharp
public object EnableInternetAccess { get; }
```

- *Type:* object

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateNetworkSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---


### GoogleColabRuntimeTemplateShieldedVmConfigOutputReference <a name="GoogleColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateShieldedVmConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateShieldedVmConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvList <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateSoftwareConfigEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```csharp
private GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleColabRuntimeTemplateSoftwareConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateSoftwareConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">PutPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">ResetPostStartupScriptConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```csharp
private void PutEnv(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* object

---

##### `PutPostStartupScriptConfig` <a name="PutPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```csharp
private void PutPostStartupScriptConfig(GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `ResetEnv` <a name="ResetEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```

##### `ResetPostStartupScriptConfig` <a name="ResetPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```csharp
private void ResetPostStartupScriptConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env">Env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">PostStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">EnvInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">PostStartupScriptConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfigEnvList Env { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `PostStartupScriptConfig`<sup>Required</sup> <a name="PostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference PostStartupScriptConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```csharp
public object EnvInput { get; }
```

- *Type:* object

---

##### `PostStartupScriptConfigInput`<sup>Optional</sup> <a name="PostStartupScriptConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig PostStartupScriptConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">ResetPostStartupScriptBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">ResetPostStartupScriptUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```csharp
private void ResetPostStartupScript()
```

##### `ResetPostStartupScriptBehavior` <a name="ResetPostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```csharp
private void ResetPostStartupScriptBehavior()
```

##### `ResetPostStartupScriptUrl` <a name="ResetPostStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```csharp
private void ResetPostStartupScriptUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">PostStartupScriptBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">PostStartupScriptUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">PostStartupScriptUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehaviorInput`<sup>Optional</sup> <a name="PostStartupScriptBehaviorInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```csharp
public string PostStartupScriptBehaviorInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```csharp
public string PostStartupScriptInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptUrlInput`<sup>Optional</sup> <a name="PostStartupScriptUrlInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```csharp
public string PostStartupScriptUrlInput { get; }
```

- *Type:* string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehavior`<sup>Required</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; }
```

- *Type:* string

---

##### `PostStartupScriptUrl`<sup>Required</sup> <a name="PostStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```csharp
public string PostStartupScriptUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### GoogleColabRuntimeTemplateTimeoutsOutputReference <a name="GoogleColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleColabRuntimeTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



