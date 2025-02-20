# `googleDnsManagedZone` Submodule <a name="`googleDnsManagedZone` Submodule" id="@cdktf/provider-google-beta.googleDnsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDnsManagedZone <a name="GoogleDnsManagedZone" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone google_dns_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZone(Construct Scope, string Id, GoogleDnsManagedZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig">GoogleDnsManagedZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig">GoogleDnsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig">PutCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig">PutDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig">PutForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig">PutPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig">PutPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetCloudLoggingConfig">ResetCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDnssecConfig">ResetDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForwardingConfig">ResetForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPeeringConfig">ResetPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPrivateVisibilityConfig">ResetPrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetReverseLookup">ResetReverseLookup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudLoggingConfig` <a name="PutCloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig"></a>

```csharp
private void PutCloudLoggingConfig(GoogleDnsManagedZoneCloudLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putCloudLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---

##### `PutDnssecConfig` <a name="PutDnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig"></a>

```csharp
private void PutDnssecConfig(GoogleDnsManagedZoneDnssecConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putDnssecConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---

##### `PutForwardingConfig` <a name="PutForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig"></a>

```csharp
private void PutForwardingConfig(GoogleDnsManagedZoneForwardingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putForwardingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---

##### `PutPeeringConfig` <a name="PutPeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig"></a>

```csharp
private void PutPeeringConfig(GoogleDnsManagedZonePeeringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---

##### `PutPrivateVisibilityConfig` <a name="PutPrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig"></a>

```csharp
private void PutPrivateVisibilityConfig(GoogleDnsManagedZonePrivateVisibilityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putPrivateVisibilityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(GoogleDnsManagedZoneServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDnsManagedZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>

---

##### `ResetCloudLoggingConfig` <a name="ResetCloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetCloudLoggingConfig"></a>

```csharp
private void ResetCloudLoggingConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnssecConfig` <a name="ResetDnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetDnssecConfig"></a>

```csharp
private void ResetDnssecConfig()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetForwardingConfig` <a name="ResetForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetForwardingConfig"></a>

```csharp
private void ResetForwardingConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetPeeringConfig` <a name="ResetPeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPeeringConfig"></a>

```csharp
private void ResetPeeringConfig()
```

##### `ResetPrivateVisibilityConfig` <a name="ResetPrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetPrivateVisibilityConfig"></a>

```csharp
private void ResetPrivateVisibilityConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetReverseLookup` <a name="ResetReverseLookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetReverseLookup"></a>

```csharp
private void ResetReverseLookup()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDnsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsManagedZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsManagedZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsManagedZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDnsManagedZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDnsManagedZone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDnsManagedZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDnsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDnsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference">GoogleDnsManagedZoneCloudLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference">GoogleDnsManagedZoneDnssecConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference">GoogleDnsManagedZoneForwardingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.managedZoneId">ManagedZoneId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameServers">NameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference">GoogleDnsManagedZonePeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference">GoogleDnsManagedZonePrivateVisibilityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference">GoogleDnsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfigInput">CloudLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsNameInput">DnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfigInput">DnssecConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfigInput">ForwardingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfigInput">PeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfigInput">PrivateVisibilityConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookupInput">ReverseLookupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookup">ReverseLookup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CloudLoggingConfig`<sup>Required</sup> <a name="CloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfig"></a>

```csharp
public GoogleDnsManagedZoneCloudLoggingConfigOutputReference CloudLoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference">GoogleDnsManagedZoneCloudLoggingConfigOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DnssecConfig`<sup>Required</sup> <a name="DnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfig"></a>

```csharp
public GoogleDnsManagedZoneDnssecConfigOutputReference DnssecConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference">GoogleDnsManagedZoneDnssecConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ForwardingConfig`<sup>Required</sup> <a name="ForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfig"></a>

```csharp
public GoogleDnsManagedZoneForwardingConfigOutputReference ForwardingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference">GoogleDnsManagedZoneForwardingConfigOutputReference</a>

---

##### `ManagedZoneId`<sup>Required</sup> <a name="ManagedZoneId" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.managedZoneId"></a>

```csharp
public double ManagedZoneId { get; }
```

- *Type:* double

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameServers"></a>

```csharp
public string[] NameServers { get; }
```

- *Type:* string[]

---

##### `PeeringConfig`<sup>Required</sup> <a name="PeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfig"></a>

```csharp
public GoogleDnsManagedZonePeeringConfigOutputReference PeeringConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference">GoogleDnsManagedZonePeeringConfigOutputReference</a>

---

##### `PrivateVisibilityConfig`<sup>Required</sup> <a name="PrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfig"></a>

```csharp
public GoogleDnsManagedZonePrivateVisibilityConfigOutputReference PrivateVisibilityConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference">GoogleDnsManagedZonePrivateVisibilityConfigOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeouts"></a>

```csharp
public GoogleDnsManagedZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference">GoogleDnsManagedZoneTimeoutsOutputReference</a>

---

##### `CloudLoggingConfigInput`<sup>Optional</sup> <a name="CloudLoggingConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.cloudLoggingConfigInput"></a>

```csharp
public GoogleDnsManagedZoneCloudLoggingConfig CloudLoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsNameInput"></a>

```csharp
public string DnsNameInput { get; }
```

- *Type:* string

---

##### `DnssecConfigInput`<sup>Optional</sup> <a name="DnssecConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnssecConfigInput"></a>

```csharp
public GoogleDnsManagedZoneDnssecConfig DnssecConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `ForwardingConfigInput`<sup>Optional</sup> <a name="ForwardingConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forwardingConfigInput"></a>

```csharp
public GoogleDnsManagedZoneForwardingConfig ForwardingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeeringConfigInput`<sup>Optional</sup> <a name="PeeringConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.peeringConfigInput"></a>

```csharp
public GoogleDnsManagedZonePeeringConfig PeeringConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---

##### `PrivateVisibilityConfigInput`<sup>Optional</sup> <a name="PrivateVisibilityConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.privateVisibilityConfigInput"></a>

```csharp
public GoogleDnsManagedZonePrivateVisibilityConfig PrivateVisibilityConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReverseLookupInput`<sup>Optional</sup> <a name="ReverseLookupInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookupInput"></a>

```csharp
public object ReverseLookupInput { get; }
```

- *Type:* object

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.serviceDirectoryConfigInput"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ReverseLookup`<sup>Required</sup> <a name="ReverseLookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.reverseLookup"></a>

```csharp
public object ReverseLookup { get; }
```

- *Type:* object

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDnsManagedZoneCloudLoggingConfig <a name="GoogleDnsManagedZoneCloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneCloudLoggingConfig {
    object EnableLogging
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.property.enableLogging">EnableLogging</a></code> | <code>object</code> | If set, enable query logging for this ManagedZone. False by default, making logging opt-in. |

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

If set, enable query logging for this ManagedZone. False by default, making logging opt-in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#enable_logging GoogleDnsManagedZone#enable_logging}

---

### GoogleDnsManagedZoneConfig <a name="GoogleDnsManagedZoneConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DnsName,
    string Name,
    GoogleDnsManagedZoneCloudLoggingConfig CloudLoggingConfig = null,
    string Description = null,
    GoogleDnsManagedZoneDnssecConfig DnssecConfig = null,
    object ForceDestroy = null,
    GoogleDnsManagedZoneForwardingConfig ForwardingConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleDnsManagedZonePeeringConfig PeeringConfig = null,
    GoogleDnsManagedZonePrivateVisibilityConfig PrivateVisibilityConfig = null,
    string Project = null,
    object ReverseLookup = null,
    GoogleDnsManagedZoneServiceDirectoryConfig ServiceDirectoryConfig = null,
    GoogleDnsManagedZoneTimeouts Timeouts = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnsName">DnsName</a></code> | <code>string</code> | The DNS name of this managed zone, for instance "example.com.". |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.name">Name</a></code> | <code>string</code> | User assigned name for this resource. Must be unique within the project. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.cloudLoggingConfig">CloudLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | cloud_logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.description">Description</a></code> | <code>string</code> | A textual description field. Defaults to 'Managed by Terraform'. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnssecConfig">DnssecConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | dnssec_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Set this true to delete all records in the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forwardingConfig">ForwardingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | forwarding_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A set of key/value label pairs to assign to this ManagedZone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.peeringConfig">PeeringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | peering_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.privateVisibilityConfig">PrivateVisibilityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | private_visibility_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.reverseLookup">ReverseLookup</a></code> | <code>object</code> | Specifies if this is a managed reverse lookup zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.visibility">Visibility</a></code> | <code>string</code> | The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnsName"></a>

```csharp
public string DnsName { get; set; }
```

- *Type:* string

The DNS name of this managed zone, for instance "example.com.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#dns_name GoogleDnsManagedZone#dns_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User assigned name for this resource. Must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#name GoogleDnsManagedZone#name}

---

##### `CloudLoggingConfig`<sup>Optional</sup> <a name="CloudLoggingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.cloudLoggingConfig"></a>

```csharp
public GoogleDnsManagedZoneCloudLoggingConfig CloudLoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

cloud_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#cloud_logging_config GoogleDnsManagedZone#cloud_logging_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A textual description field. Defaults to 'Managed by Terraform'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#description GoogleDnsManagedZone#description}

---

##### `DnssecConfig`<sup>Optional</sup> <a name="DnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.dnssecConfig"></a>

```csharp
public GoogleDnsManagedZoneDnssecConfig DnssecConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

dnssec_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#dnssec_config GoogleDnsManagedZone#dnssec_config}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Set this true to delete all records in the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#force_destroy GoogleDnsManagedZone#force_destroy}

---

##### `ForwardingConfig`<sup>Optional</sup> <a name="ForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.forwardingConfig"></a>

```csharp
public GoogleDnsManagedZoneForwardingConfig ForwardingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

forwarding_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#forwarding_config GoogleDnsManagedZone#forwarding_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#id GoogleDnsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A set of key/value label pairs to assign to this ManagedZone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#labels GoogleDnsManagedZone#labels}

---

##### `PeeringConfig`<sup>Optional</sup> <a name="PeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.peeringConfig"></a>

```csharp
public GoogleDnsManagedZonePeeringConfig PeeringConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#peering_config GoogleDnsManagedZone#peering_config}

---

##### `PrivateVisibilityConfig`<sup>Optional</sup> <a name="PrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.privateVisibilityConfig"></a>

```csharp
public GoogleDnsManagedZonePrivateVisibilityConfig PrivateVisibilityConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

private_visibility_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#private_visibility_config GoogleDnsManagedZone#private_visibility_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#project GoogleDnsManagedZone#project}.

---

##### `ReverseLookup`<sup>Optional</sup> <a name="ReverseLookup" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.reverseLookup"></a>

```csharp
public object ReverseLookup { get; set; }
```

- *Type:* object

Specifies if this is a managed reverse lookup zone.

If true, Cloud DNS will resolve reverse
lookup queries using automatically configured records for VPC resources. This only applies
to networks listed under 'private_visibility_config'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#reverse_lookup GoogleDnsManagedZone#reverse_lookup}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#service_directory_config GoogleDnsManagedZone#service_directory_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.timeouts"></a>

```csharp
public GoogleDnsManagedZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts">GoogleDnsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#timeouts GoogleDnsManagedZone#timeouts}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

The zone's visibility: public zones are exposed to the Internet, while private zones are visible only to Virtual Private Cloud resources.

Default value: "public" Possible values: ["private", "public"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#visibility GoogleDnsManagedZone#visibility}

---

### GoogleDnsManagedZoneDnssecConfig <a name="GoogleDnsManagedZoneDnssecConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneDnssecConfig {
    object DefaultKeySpecs = null,
    string Kind = null,
    string NonExistence = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code>object</code> | default_key_specs block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.kind">Kind</a></code> | <code>string</code> | Identifies what kind of resource this is. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.nonExistence">NonExistence</a></code> | <code>string</code> | Specifies the mechanism used to provide authenticated denial-of-existence responses. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.state">State</a></code> | <code>string</code> | Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"]. |

---

##### `DefaultKeySpecs`<sup>Optional</sup> <a name="DefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.defaultKeySpecs"></a>

```csharp
public object DefaultKeySpecs { get; set; }
```

- *Type:* object

default_key_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#default_key_specs GoogleDnsManagedZone#default_key_specs}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}

---

##### `NonExistence`<sup>Optional</sup> <a name="NonExistence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.nonExistence"></a>

```csharp
public string NonExistence { get; set; }
```

- *Type:* string

Specifies the mechanism used to provide authenticated denial-of-existence responses.

non_existence can only be updated when the state is 'off'. Possible values: ["nsec", "nsec3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#non_existence GoogleDnsManagedZone#non_existence}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Specifies whether DNSSEC is enabled, and what mode it is in Possible values: ["off", "on", "transfer"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#state GoogleDnsManagedZone#state}

---

### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs {
    string Algorithm = null,
    double KeyLength = null,
    string KeyType = null,
    string Kind = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm">Algorithm</a></code> | <code>string</code> | String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength">KeyLength</a></code> | <code>double</code> | Length of the keys in bits. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType">KeyType</a></code> | <code>string</code> | Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK). |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind">Kind</a></code> | <code>string</code> | Identifies what kind of resource this is. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

String mnemonic specifying the DNSSEC algorithm of this key Possible values: ["ecdsap256sha256", "ecdsap384sha384", "rsasha1", "rsasha256", "rsasha512"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#algorithm GoogleDnsManagedZone#algorithm}

---

##### `KeyLength`<sup>Optional</sup> <a name="KeyLength" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyLength"></a>

```csharp
public double KeyLength { get; set; }
```

- *Type:* double

Length of the keys in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#key_length GoogleDnsManagedZone#key_length}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Specifies whether this is a key signing key (KSK) or a zone signing key (ZSK).

Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets. Possible values: ["keySigning", "zoneSigning"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#key_type GoogleDnsManagedZone#key_type}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecs.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Identifies what kind of resource this is.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#kind GoogleDnsManagedZone#kind}

---

### GoogleDnsManagedZoneForwardingConfig <a name="GoogleDnsManagedZoneForwardingConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneForwardingConfig {
    object TargetNameServers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.property.targetNameServers">TargetNameServers</a></code> | <code>object</code> | target_name_servers block. |

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig.property.targetNameServers"></a>

```csharp
public object TargetNameServers { get; set; }
```

- *Type:* object

target_name_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#target_name_servers GoogleDnsManagedZone#target_name_servers}

---

### GoogleDnsManagedZoneForwardingConfigTargetNameServers <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneForwardingConfigTargetNameServers {
    string Ipv4Address,
    string ForwardingPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | IPv4 address of a target name server. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath">ForwardingPath</a></code> | <code>string</code> | Forwarding path for this TargetNameServer. |

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; set; }
```

- *Type:* string

IPv4 address of a target name server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#ipv4_address GoogleDnsManagedZone#ipv4_address}

---

##### `ForwardingPath`<sup>Optional</sup> <a name="ForwardingPath" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServers.property.forwardingPath"></a>

```csharp
public string ForwardingPath { get; set; }
```

- *Type:* string

Forwarding path for this TargetNameServer.

If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#forwarding_path GoogleDnsManagedZone#forwarding_path}

---

### GoogleDnsManagedZonePeeringConfig <a name="GoogleDnsManagedZonePeeringConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePeeringConfig {
    GoogleDnsManagedZonePeeringConfigTargetNetwork TargetNetwork
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | target_network block. |

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig.property.targetNetwork"></a>

```csharp
public GoogleDnsManagedZonePeeringConfigTargetNetwork TargetNetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

target_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#target_network GoogleDnsManagedZone#target_network}

---

### GoogleDnsManagedZonePeeringConfigTargetNetwork <a name="GoogleDnsManagedZonePeeringConfigTargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePeeringConfigTargetNetwork {
    string NetworkUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The id or fully qualified URL of the VPC network to forward queries to. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The id or fully qualified URL of the VPC network to forward queries to.

This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}

---

### GoogleDnsManagedZonePrivateVisibilityConfig <a name="GoogleDnsManagedZonePrivateVisibilityConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfig {
    object GkeClusters = null,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.gkeClusters">GkeClusters</a></code> | <code>object</code> | gke_clusters block. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.networks">Networks</a></code> | <code>object</code> | networks block. |

---

##### `GkeClusters`<sup>Optional</sup> <a name="GkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.gkeClusters"></a>

```csharp
public object GkeClusters { get; set; }
```

- *Type:* object

gke_clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#gke_clusters GoogleDnsManagedZone#gke_clusters}

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

networks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#networks GoogleDnsManagedZone#networks}

---

### GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters {
    string GkeClusterName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName">GkeClusterName</a></code> | <code>string</code> | The resource name of the cluster to bind this ManagedZone to. |

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClusters.property.gkeClusterName"></a>

```csharp
public string GkeClusterName { get; set; }
```

- *Type:* string

The resource name of the cluster to bind this ManagedZone to.

This should be specified in the format like
'projects/* /locations/* /clusters/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#gke_cluster_name GoogleDnsManagedZone#gke_cluster_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDnsManagedZonePrivateVisibilityConfigNetworks <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfigNetworks {
    string NetworkUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'. |

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworks.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; set; }
```

- *Type:* string

The id or fully qualified URL of the VPC network to bind to. This should be formatted like 'projects/{project}/global/networks/{network}' or 'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#network_url GoogleDnsManagedZone#network_url}

---

### GoogleDnsManagedZoneServiceDirectoryConfig <a name="GoogleDnsManagedZoneServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneServiceDirectoryConfig {
    GoogleDnsManagedZoneServiceDirectoryConfigNamespace Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | namespace block. |

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig.property.namespace"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfigNamespace Namespace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#namespace GoogleDnsManagedZone#namespace}

---

### GoogleDnsManagedZoneServiceDirectoryConfigNamespace <a name="GoogleDnsManagedZoneServiceDirectoryConfigNamespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneServiceDirectoryConfigNamespace {
    string NamespaceUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.property.namespaceUrl">NamespaceUrl</a></code> | <code>string</code> | The fully qualified or partial URL of the service directory namespace that should be associated with the zone. |

---

##### `NamespaceUrl`<sup>Required</sup> <a name="NamespaceUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace.property.namespaceUrl"></a>

```csharp
public string NamespaceUrl { get; set; }
```

- *Type:* string

The fully qualified or partial URL of the service directory namespace that should be associated with the zone.

This should be formatted like
'https://servicedirectory.googleapis.com/v1/projects/{project}/locations/{location}/namespaces/{namespace_id}'
or simply 'projects/{project}/locations/{location}/namespaces/{namespace_id}'
Ignored for 'public' visibility zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#namespace_url GoogleDnsManagedZone#namespace_url}

---

### GoogleDnsManagedZoneTimeouts <a name="GoogleDnsManagedZoneTimeouts" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#create GoogleDnsManagedZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#delete GoogleDnsManagedZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dns_managed_zone#update GoogleDnsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDnsManagedZoneCloudLoggingConfigOutputReference <a name="GoogleDnsManagedZoneCloudLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneCloudLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZoneCloudLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneCloudLoggingConfig">GoogleDnsManagedZoneCloudLoggingConfig</a>

---


### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get"></a>

```csharp
private GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference <a name="GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength">ResetKeyLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind">ResetKind</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetKeyLength` <a name="ResetKeyLength" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyLength"></a>

```csharp
private void ResetKeyLength()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput">KeyLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength">KeyLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `KeyLengthInput`<sup>Optional</sup> <a name="KeyLengthInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLengthInput"></a>

```csharp
public double KeyLengthInput { get; }
```

- *Type:* double

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `KeyLength`<sup>Required</sup> <a name="KeyLength" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyLength"></a>

```csharp
public double KeyLength { get; }
```

- *Type:* double

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZoneDnssecConfigOutputReference <a name="GoogleDnsManagedZoneDnssecConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneDnssecConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs">PutDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs">ResetDefaultKeySpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetNonExistence">ResetNonExistence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultKeySpecs` <a name="PutDefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs"></a>

```csharp
private void PutDefaultKeySpecs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.putDefaultKeySpecs.parameter.value"></a>

- *Type:* object

---

##### `ResetDefaultKeySpecs` <a name="ResetDefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetDefaultKeySpecs"></a>

```csharp
private void ResetDefaultKeySpecs()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetNonExistence` <a name="ResetNonExistence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetNonExistence"></a>

```csharp
private void ResetNonExistence()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs">DefaultKeySpecs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput">DefaultKeySpecsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput">NonExistenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistence">NonExistence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultKeySpecs`<sup>Required</sup> <a name="DefaultKeySpecs" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecs"></a>

```csharp
public GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList DefaultKeySpecs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList">GoogleDnsManagedZoneDnssecConfigDefaultKeySpecsList</a>

---

##### `DefaultKeySpecsInput`<sup>Optional</sup> <a name="DefaultKeySpecsInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.defaultKeySpecsInput"></a>

```csharp
public object DefaultKeySpecsInput { get; }
```

- *Type:* object

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NonExistenceInput`<sup>Optional</sup> <a name="NonExistenceInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistenceInput"></a>

```csharp
public string NonExistenceInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `NonExistence`<sup>Required</sup> <a name="NonExistence" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.nonExistence"></a>

```csharp
public string NonExistence { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZoneDnssecConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneDnssecConfig">GoogleDnsManagedZoneDnssecConfig</a>

---


### GoogleDnsManagedZoneForwardingConfigOutputReference <a name="GoogleDnsManagedZoneForwardingConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneForwardingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers">PutTargetNameServers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNameServers` <a name="PutTargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers"></a>

```csharp
private void PutTargetNameServers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.putTargetNameServers.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServers">TargetNameServers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList">GoogleDnsManagedZoneForwardingConfigTargetNameServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput">TargetNameServersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetNameServers`<sup>Required</sup> <a name="TargetNameServers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServers"></a>

```csharp
public GoogleDnsManagedZoneForwardingConfigTargetNameServersList TargetNameServers { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList">GoogleDnsManagedZoneForwardingConfigTargetNameServersList</a>

---

##### `TargetNameServersInput`<sup>Optional</sup> <a name="TargetNameServersInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.targetNameServersInput"></a>

```csharp
public object TargetNameServersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZoneForwardingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfig">GoogleDnsManagedZoneForwardingConfig</a>

---


### GoogleDnsManagedZoneForwardingConfigTargetNameServersList <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServersList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneForwardingConfigTargetNameServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get"></a>

```csharp
private GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference <a name="GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath">ResetForwardingPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForwardingPath` <a name="ResetForwardingPath" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.resetForwardingPath"></a>

```csharp
private void ResetForwardingPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput">ForwardingPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath">ForwardingPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForwardingPathInput`<sup>Optional</sup> <a name="ForwardingPathInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPathInput"></a>

```csharp
public string ForwardingPathInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4AddressInput"></a>

```csharp
public string Ipv4AddressInput { get; }
```

- *Type:* string

---

##### `ForwardingPath`<sup>Required</sup> <a name="ForwardingPath" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.forwardingPath"></a>

```csharp
public string ForwardingPath { get; }
```

- *Type:* string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.ipv4Address"></a>

```csharp
public string Ipv4Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneForwardingConfigTargetNameServersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZonePeeringConfigOutputReference <a name="GoogleDnsManagedZonePeeringConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork">PutTargetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetNetwork` <a name="PutTargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork"></a>

```csharp
private void PutTargetNetwork(GoogleDnsManagedZonePeeringConfigTargetNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.putTargetNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference">GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetwork"></a>

```csharp
public GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference TargetNetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference">GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference</a>

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.targetNetworkInput"></a>

```csharp
public GoogleDnsManagedZonePeeringConfigTargetNetwork TargetNetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZonePeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfig">GoogleDnsManagedZonePeeringConfig</a>

---


### GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference <a name="GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZonePeeringConfigTargetNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePeeringConfigTargetNetwork">GoogleDnsManagedZonePeeringConfigTargetNetwork</a>

---


### GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get"></a>

```csharp
private GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput">GkeClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName">GkeClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeClusterNameInput`<sup>Optional</sup> <a name="GkeClusterNameInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterNameInput"></a>

```csharp
public string GkeClusterNameInput { get; }
```

- *Type:* string

---

##### `GkeClusterName`<sup>Required</sup> <a name="GkeClusterName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.gkeClusterName"></a>

```csharp
public string GkeClusterName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZonePrivateVisibilityConfigNetworksList <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworksList" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfigNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get"></a>

```csharp
private GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput">NetworkUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl">NetworkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkUrlInput`<sup>Optional</sup> <a name="NetworkUrlInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrlInput"></a>

```csharp
public string NetworkUrlInput { get; }
```

- *Type:* string

---

##### `NetworkUrl`<sup>Required</sup> <a name="NetworkUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.networkUrl"></a>

```csharp
public string NetworkUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDnsManagedZonePrivateVisibilityConfigOutputReference <a name="GoogleDnsManagedZonePrivateVisibilityConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZonePrivateVisibilityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters">PutGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters">ResetGkeClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGkeClusters` <a name="PutGkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters"></a>

```csharp
private void PutGkeClusters(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putGkeClusters.parameter.value"></a>

- *Type:* object

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetGkeClusters` <a name="ResetGkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetGkeClusters"></a>

```csharp
private void ResetGkeClusters()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters">GkeClusters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList">GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList">GoogleDnsManagedZonePrivateVisibilityConfigNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput">GkeClustersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GkeClusters`<sup>Required</sup> <a name="GkeClusters" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClusters"></a>

```csharp
public GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList GkeClusters { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList">GoogleDnsManagedZonePrivateVisibilityConfigGkeClustersList</a>

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networks"></a>

```csharp
public GoogleDnsManagedZonePrivateVisibilityConfigNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigNetworksList">GoogleDnsManagedZonePrivateVisibilityConfigNetworksList</a>

---

##### `GkeClustersInput`<sup>Optional</sup> <a name="GkeClustersInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.gkeClustersInput"></a>

```csharp
public object GkeClustersInput { get; }
```

- *Type:* object

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZonePrivateVisibilityConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZonePrivateVisibilityConfig">GoogleDnsManagedZonePrivateVisibilityConfig</a>

---


### GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference <a name="GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrlInput">NamespaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrl">NamespaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceUrlInput`<sup>Optional</sup> <a name="NamespaceUrlInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrlInput"></a>

```csharp
public string NamespaceUrlInput { get; }
```

- *Type:* string

---

##### `NamespaceUrl`<sup>Required</sup> <a name="NamespaceUrl" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.namespaceUrl"></a>

```csharp
public string NamespaceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfigNamespace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---


### GoogleDnsManagedZoneServiceDirectoryConfigOutputReference <a name="GoogleDnsManagedZoneServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace">PutNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNamespace` <a name="PutNamespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace"></a>

```csharp
private void PutNamespace(GoogleDnsManagedZoneServiceDirectoryConfigNamespace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.putNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespace"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference Namespace { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference">GoogleDnsManagedZoneServiceDirectoryConfigNamespaceOutputReference</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.namespaceInput"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfigNamespace NamespaceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigNamespace">GoogleDnsManagedZoneServiceDirectoryConfigNamespace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDnsManagedZoneServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneServiceDirectoryConfig">GoogleDnsManagedZoneServiceDirectoryConfig</a>

---


### GoogleDnsManagedZoneTimeoutsOutputReference <a name="GoogleDnsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDnsManagedZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDnsManagedZone.GoogleDnsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



