# `googleComputeRouterNat` Submodule <a name="`googleComputeRouterNat` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterNat <a name="GoogleComputeRouterNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNat(Construct Scope, string Id, GoogleComputeRouterNatConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig">GoogleComputeRouterNatConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig">GoogleComputeRouterNatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig">PutLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork">PutSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier">ResetAutoNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps">ResetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation">ResetEnableDynamicPortAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping">ResetEnableEndpointIndependentMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes">ResetEndpointTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec">ResetIcmpIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps">ResetInitialNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig">ResetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm">ResetMaxPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm">ResetMinPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption">ResetNatIpAllocateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps">ResetNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">ResetTcpEstablishedIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec">ResetTcpTimeWaitTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">ResetTcpTransitoryIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec">ResetUdpIdleTimeoutSec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogConfig` <a name="PutLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig"></a>

```csharp
private void PutLogConfig(GoogleComputeRouterNatLogConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutSubnetwork` <a name="PutSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork"></a>

```csharp
private void PutSubnetwork(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRouterNatTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

---

##### `ResetAutoNetworkTier` <a name="ResetAutoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier"></a>

```csharp
private void ResetAutoNetworkTier()
```

##### `ResetDrainNatIps` <a name="ResetDrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps"></a>

```csharp
private void ResetDrainNatIps()
```

##### `ResetEnableDynamicPortAllocation` <a name="ResetEnableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```csharp
private void ResetEnableDynamicPortAllocation()
```

##### `ResetEnableEndpointIndependentMapping` <a name="ResetEnableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```csharp
private void ResetEnableEndpointIndependentMapping()
```

##### `ResetEndpointTypes` <a name="ResetEndpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes"></a>

```csharp
private void ResetEndpointTypes()
```

##### `ResetIcmpIdleTimeoutSec` <a name="ResetIcmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```csharp
private void ResetIcmpIdleTimeoutSec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialNatIps` <a name="ResetInitialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps"></a>

```csharp
private void ResetInitialNatIps()
```

##### `ResetLogConfig` <a name="ResetLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig"></a>

```csharp
private void ResetLogConfig()
```

##### `ResetMaxPortsPerVm` <a name="ResetMaxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm"></a>

```csharp
private void ResetMaxPortsPerVm()
```

##### `ResetMinPortsPerVm` <a name="ResetMinPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm"></a>

```csharp
private void ResetMinPortsPerVm()
```

##### `ResetNatIpAllocateOption` <a name="ResetNatIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption"></a>

```csharp
private void ResetNatIpAllocateOption()
```

##### `ResetNatIps` <a name="ResetNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps"></a>

```csharp
private void ResetNatIps()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules"></a>

```csharp
private void ResetRules()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTcpEstablishedIdleTimeoutSec` <a name="ResetTcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```csharp
private void ResetTcpEstablishedIdleTimeoutSec()
```

##### `ResetTcpTimeWaitTimeoutSec` <a name="ResetTcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```csharp
private void ResetTcpTimeWaitTimeoutSec()
```

##### `ResetTcpTransitoryIdleTimeoutSec` <a name="ResetTcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```csharp
private void ResetTcpTransitoryIdleTimeoutSec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUdpIdleTimeoutSec` <a name="ResetUdpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```csharp
private void ResetUdpIdleTimeoutSec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterNat.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterNat.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterNat.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRouterNat.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRouterNat to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRouterNat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterNat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork">Subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput">AutoNetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput">DrainNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput">EnableDynamicPortAllocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput">EnableEndpointIndependentMappingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput">EndpointTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput">IcmpIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput">InitialNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput">LogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput">MaxPortsPerVmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput">MinPortsPerVmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput">NatIpAllocateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput">NatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput">RouterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">SourceSubnetworkIpRangesToNatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput">SubnetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">TcpEstablishedIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">TcpTimeWaitTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">TcpTransitoryIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput">UdpIdleTimeoutSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier">AutoNetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps">DrainNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation">EnableDynamicPortAllocation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes">EndpointTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps">InitialNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm">MaxPortsPerVm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps">NatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router">Router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec">TcpTimeWaitTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LogConfig`<sup>Required</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig"></a>

```csharp
public GoogleComputeRouterNatLogConfigOutputReference LogConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules"></a>

```csharp
public GoogleComputeRouterNatRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a>

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork"></a>

```csharp
public GoogleComputeRouterNatSubnetworkList Subnetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts"></a>

```csharp
public GoogleComputeRouterNatTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a>

---

##### `AutoNetworkTierInput`<sup>Optional</sup> <a name="AutoNetworkTierInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput"></a>

```csharp
public string AutoNetworkTierInput { get; }
```

- *Type:* string

---

##### `DrainNatIpsInput`<sup>Optional</sup> <a name="DrainNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput"></a>

```csharp
public string[] DrainNatIpsInput { get; }
```

- *Type:* string[]

---

##### `EnableDynamicPortAllocationInput`<sup>Optional</sup> <a name="EnableDynamicPortAllocationInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```csharp
public object EnableDynamicPortAllocationInput { get; }
```

- *Type:* object

---

##### `EnableEndpointIndependentMappingInput`<sup>Optional</sup> <a name="EnableEndpointIndependentMappingInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```csharp
public object EnableEndpointIndependentMappingInput { get; }
```

- *Type:* object

---

##### `EndpointTypesInput`<sup>Optional</sup> <a name="EndpointTypesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput"></a>

```csharp
public string[] EndpointTypesInput { get; }
```

- *Type:* string[]

---

##### `IcmpIdleTimeoutSecInput`<sup>Optional</sup> <a name="IcmpIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```csharp
public double IcmpIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialNatIpsInput`<sup>Optional</sup> <a name="InitialNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput"></a>

```csharp
public string[] InitialNatIpsInput { get; }
```

- *Type:* string[]

---

##### `LogConfigInput`<sup>Optional</sup> <a name="LogConfigInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput"></a>

```csharp
public GoogleComputeRouterNatLogConfig LogConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---

##### `MaxPortsPerVmInput`<sup>Optional</sup> <a name="MaxPortsPerVmInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput"></a>

```csharp
public double MaxPortsPerVmInput { get; }
```

- *Type:* double

---

##### `MinPortsPerVmInput`<sup>Optional</sup> <a name="MinPortsPerVmInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput"></a>

```csharp
public double MinPortsPerVmInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatIpAllocateOptionInput`<sup>Optional</sup> <a name="NatIpAllocateOptionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput"></a>

```csharp
public string NatIpAllocateOptionInput { get; }
```

- *Type:* string

---

##### `NatIpsInput`<sup>Optional</sup> <a name="NatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput"></a>

```csharp
public string[] NatIpsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput"></a>

```csharp
public string RouterInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `SourceSubnetworkIpRangesToNatInput`<sup>Optional</sup> <a name="SourceSubnetworkIpRangesToNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```csharp
public string SourceSubnetworkIpRangesToNatInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput"></a>

```csharp
public object SubnetworkInput { get; }
```

- *Type:* object

---

##### `TcpEstablishedIdleTimeoutSecInput`<sup>Optional</sup> <a name="TcpEstablishedIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```csharp
public double TcpEstablishedIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `TcpTimeWaitTimeoutSecInput`<sup>Optional</sup> <a name="TcpTimeWaitTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```csharp
public double TcpTimeWaitTimeoutSecInput { get; }
```

- *Type:* double

---

##### `TcpTransitoryIdleTimeoutSecInput`<sup>Optional</sup> <a name="TcpTransitoryIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```csharp
public double TcpTransitoryIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UdpIdleTimeoutSecInput`<sup>Optional</sup> <a name="UdpIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```csharp
public double UdpIdleTimeoutSecInput { get; }
```

- *Type:* double

---

##### `AutoNetworkTier`<sup>Required</sup> <a name="AutoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier"></a>

```csharp
public string AutoNetworkTier { get; }
```

- *Type:* string

---

##### `DrainNatIps`<sup>Required</sup> <a name="DrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps"></a>

```csharp
public string[] DrainNatIps { get; }
```

- *Type:* string[]

---

##### `EnableDynamicPortAllocation`<sup>Required</sup> <a name="EnableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation"></a>

```csharp
public object EnableDynamicPortAllocation { get; }
```

- *Type:* object

---

##### `EnableEndpointIndependentMapping`<sup>Required</sup> <a name="EnableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```csharp
public object EnableEndpointIndependentMapping { get; }
```

- *Type:* object

---

##### `EndpointTypes`<sup>Required</sup> <a name="EndpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes"></a>

```csharp
public string[] EndpointTypes { get; }
```

- *Type:* string[]

---

##### `IcmpIdleTimeoutSec`<sup>Required</sup> <a name="IcmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```csharp
public double IcmpIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialNatIps`<sup>Required</sup> <a name="InitialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps"></a>

```csharp
public string[] InitialNatIps { get; }
```

- *Type:* string[]

---

##### `MaxPortsPerVm`<sup>Required</sup> <a name="MaxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm"></a>

```csharp
public double MaxPortsPerVm { get; }
```

- *Type:* double

---

##### `MinPortsPerVm`<sup>Required</sup> <a name="MinPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm"></a>

```csharp
public double MinPortsPerVm { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatIpAllocateOption`<sup>Required</sup> <a name="NatIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption"></a>

```csharp
public string NatIpAllocateOption { get; }
```

- *Type:* string

---

##### `NatIps`<sup>Required</sup> <a name="NatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps"></a>

```csharp
public string[] NatIps { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router"></a>

```csharp
public string Router { get; }
```

- *Type:* string

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```csharp
public string SourceSubnetworkIpRangesToNat { get; }
```

- *Type:* string

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```csharp
public double TcpEstablishedIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `TcpTimeWaitTimeoutSec`<sup>Required</sup> <a name="TcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```csharp
public double TcpTimeWaitTimeoutSec { get; }
```

- *Type:* double

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```csharp
public double TcpTransitoryIdleTimeoutSec { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UdpIdleTimeoutSec`<sup>Required</sup> <a name="UdpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec"></a>

```csharp
public double UdpIdleTimeoutSec { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterNatConfig <a name="GoogleComputeRouterNatConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Router,
    string SourceSubnetworkIpRangesToNat,
    string AutoNetworkTier = null,
    string[] DrainNatIps = null,
    object EnableDynamicPortAllocation = null,
    object EnableEndpointIndependentMapping = null,
    string[] EndpointTypes = null,
    double IcmpIdleTimeoutSec = null,
    string Id = null,
    string[] InitialNatIps = null,
    GoogleComputeRouterNatLogConfig LogConfig = null,
    double MaxPortsPerVm = null,
    double MinPortsPerVm = null,
    string NatIpAllocateOption = null,
    string[] NatIps = null,
    string Project = null,
    string Region = null,
    object Rules = null,
    object Subnetwork = null,
    double TcpEstablishedIdleTimeoutSec = null,
    double TcpTimeWaitTimeoutSec = null,
    double TcpTransitoryIdleTimeoutSec = null,
    GoogleComputeRouterNatTimeouts Timeouts = null,
    string Type = null,
    double UdpIdleTimeoutSec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name">Name</a></code> | <code>string</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router">Router</a></code> | <code>string</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">SourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier">AutoNetworkTier</a></code> | <code>string</code> | The network tier to use when automatically reserving NAT IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps">DrainNatIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation">EnableDynamicPortAllocation</a></code> | <code>object</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping">EnableEndpointIndependentMapping</a></code> | <code>object</code> | Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes">EndpointTypes</a></code> | <code>string[]</code> | Specifies the endpoint Types supported by the NAT Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec">IcmpIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps">InitialNatIps</a></code> | <code>string[]</code> | Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig">LogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm">MaxPortsPerVm</a></code> | <code>double</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm">MinPortsPerVm</a></code> | <code>double</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption">NatIpAllocateOption</a></code> | <code>string</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps">NatIps</a></code> | <code>string[]</code> | Self-links of NAT IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region">Region</a></code> | <code>string</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork">Subnetwork</a></code> | <code>object</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">TcpEstablishedIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">TcpTimeWaitTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">TcpTransitoryIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type">Type</a></code> | <code>string</code> | Indicates whether this NAT is used for public or private IP translation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec">UdpIdleTimeoutSec</a></code> | <code>double</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router"></a>

```csharp
public string Router { get; set; }
```

- *Type:* string

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#router GoogleComputeRouterNat#router}

---

##### `SourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="SourceSubnetworkIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```csharp
public string SourceSubnetworkIpRangesToNat { get; set; }
```

- *Type:* string

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#source_subnetwork_ip_ranges_to_nat GoogleComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `AutoNetworkTier`<sup>Optional</sup> <a name="AutoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier"></a>

```csharp
public string AutoNetworkTier { get; set; }
```

- *Type:* string

The network tier to use when automatically reserving NAT IP addresses.

Must be one of: PREMIUM, STANDARD. If not specified, then the current
project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#auto_network_tier GoogleComputeRouterNat#auto_network_tier}

---

##### `DrainNatIps`<sup>Optional</sup> <a name="DrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps"></a>

```csharp
public string[] DrainNatIps { get; set; }
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#drain_nat_ips GoogleComputeRouterNat#drain_nat_ips}

---

##### `EnableDynamicPortAllocation`<sup>Optional</sup> <a name="EnableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```csharp
public object EnableDynamicPortAllocation { get; set; }
```

- *Type:* object

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#enable_dynamic_port_allocation GoogleComputeRouterNat#enable_dynamic_port_allocation}

---

##### `EnableEndpointIndependentMapping`<sup>Optional</sup> <a name="EnableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```csharp
public object EnableEndpointIndependentMapping { get; set; }
```

- *Type:* object

Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#enable_endpoint_independent_mapping GoogleComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `EndpointTypes`<sup>Optional</sup> <a name="EndpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes"></a>

```csharp
public string[] EndpointTypes { get; set; }
```

- *Type:* string[]

Specifies the endpoint Types supported by the NAT Gateway.

Supported values include:
'ENDPOINT_TYPE_VM', 'ENDPOINT_TYPE_SWG',
'ENDPOINT_TYPE_MANAGED_PROXY_LB'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#endpoint_types GoogleComputeRouterNat#endpoint_types}

---

##### `IcmpIdleTimeoutSec`<sup>Optional</sup> <a name="IcmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```csharp
public double IcmpIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#icmp_idle_timeout_sec GoogleComputeRouterNat#icmp_idle_timeout_sec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialNatIps`<sup>Optional</sup> <a name="InitialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps"></a>

```csharp
public string[] InitialNatIps { get; set; }
```

- *Type:* string[]

Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource.

Conflicts with natIps and drainNatIps. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#initial_nat_ips GoogleComputeRouterNat#initial_nat_ips}

---

##### `LogConfig`<sup>Optional</sup> <a name="LogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig"></a>

```csharp
public GoogleComputeRouterNatLogConfig LogConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#log_config GoogleComputeRouterNat#log_config}

---

##### `MaxPortsPerVm`<sup>Optional</sup> <a name="MaxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm"></a>

```csharp
public double MaxPortsPerVm { get; set; }
```

- *Type:* double

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#max_ports_per_vm GoogleComputeRouterNat#max_ports_per_vm}

---

##### `MinPortsPerVm`<sup>Optional</sup> <a name="MinPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm"></a>

```csharp
public double MinPortsPerVm { get; set; }
```

- *Type:* double

Minimum number of ports allocated to a VM from this NAT.

Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#min_ports_per_vm GoogleComputeRouterNat#min_ports_per_vm}

---

##### `NatIpAllocateOption`<sup>Optional</sup> <a name="NatIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption"></a>

```csharp
public string NatIpAllocateOption { get; set; }
```

- *Type:* string

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#nat_ip_allocate_option GoogleComputeRouterNat#nat_ip_allocate_option}

---

##### `NatIps`<sup>Optional</sup> <a name="NatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps"></a>

```csharp
public string[] NatIps { get; set; }
```

- *Type:* string[]

Self-links of NAT IPs.

Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
If this field is used alongside with a count created list of address resources 'google_compute_address.foobar.*.self_link',
the access level resource for the address resource must have a 'lifecycle' block with 'create_before_destroy = true' so
the number of resources can be increased/decreased without triggering the 'resourceInUseByAnotherResource' error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#nat_ips GoogleComputeRouterNat#nat_ips}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#region GoogleComputeRouterNat#region}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#rules GoogleComputeRouterNat#rules}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork"></a>

```csharp
public object Subnetwork { get; set; }
```

- *Type:* object

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#subnetwork GoogleComputeRouterNat#subnetwork}

---

##### `TcpEstablishedIdleTimeoutSec`<sup>Optional</sup> <a name="TcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```csharp
public double TcpEstablishedIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#tcp_established_idle_timeout_sec GoogleComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `TcpTimeWaitTimeoutSec`<sup>Optional</sup> <a name="TcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```csharp
public double TcpTimeWaitTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#tcp_time_wait_timeout_sec GoogleComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `TcpTransitoryIdleTimeoutSec`<sup>Optional</sup> <a name="TcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```csharp
public double TcpTransitoryIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#tcp_transitory_idle_timeout_sec GoogleComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts"></a>

```csharp
public GoogleComputeRouterNatTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#timeouts GoogleComputeRouterNat#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Indicates whether this NAT is used for public or private IP translation.

If unspecified, it defaults to PUBLIC.
If 'PUBLIC' NAT used for public IP translation.
If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC" Possible values: ["PUBLIC", "PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#type GoogleComputeRouterNat#type}

---

##### `UdpIdleTimeoutSec`<sup>Optional</sup> <a name="UdpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```csharp
public double UdpIdleTimeoutSec { get; set; }
```

- *Type:* double

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#udp_idle_timeout_sec GoogleComputeRouterNat#udp_idle_timeout_sec}

---

### GoogleComputeRouterNatLogConfig <a name="GoogleComputeRouterNatLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatLogConfig {
    object Enable,
    string Filter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable">Enable</a></code> | <code>object</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter">Filter</a></code> | <code>string</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable"></a>

```csharp
public object Enable { get; set; }
```

- *Type:* object

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#enable GoogleComputeRouterNat#enable}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#filter GoogleComputeRouterNat#filter}

---

### GoogleComputeRouterNatRules <a name="GoogleComputeRouterNatRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatRules {
    string Match,
    double RuleNumber,
    GoogleComputeRouterNatRulesAction Action = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match">Match</a></code> | <code>string</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description">Description</a></code> | <code>string</code> | An optional description of this rule. |

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#match GoogleComputeRouterNat#match}

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; set; }
```

- *Type:* double

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#rule_number GoogleComputeRouterNat#rule_number}

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action"></a>

```csharp
public GoogleComputeRouterNatRulesAction Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#action GoogleComputeRouterNat#action}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#description GoogleComputeRouterNat#description}

---

### GoogleComputeRouterNatRulesAction <a name="GoogleComputeRouterNatRulesAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatRulesAction {
    string[] SourceNatActiveIps = null,
    string[] SourceNatActiveRanges = null,
    string[] SourceNatDrainIps = null,
    string[] SourceNatDrainRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps">SourceNatActiveIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges">SourceNatActiveRanges</a></code> | <code>string[]</code> | A list of URLs of the subnetworks used as source ranges for this NAT Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps">SourceNatDrainIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges">SourceNatDrainRanges</a></code> | <code>string[]</code> | A list of URLs of subnetworks representing source ranges to be drained. |

---

##### `SourceNatActiveIps`<sup>Optional</sup> <a name="SourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```csharp
public string[] SourceNatActiveIps { get; set; }
```

- *Type:* string[]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#source_nat_active_ips GoogleComputeRouterNat#source_nat_active_ips}

---

##### `SourceNatActiveRanges`<sup>Optional</sup> <a name="SourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges"></a>

```csharp
public string[] SourceNatActiveRanges { get; set; }
```

- *Type:* string[]

A list of URLs of the subnetworks used as source ranges for this NAT Rule.

These subnetworks must have purpose set to PRIVATE_NAT.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#source_nat_active_ranges GoogleComputeRouterNat#source_nat_active_ranges}

---

##### `SourceNatDrainIps`<sup>Optional</sup> <a name="SourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```csharp
public string[] SourceNatDrainIps { get; set; }
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#source_nat_drain_ips GoogleComputeRouterNat#source_nat_drain_ips}

---

##### `SourceNatDrainRanges`<sup>Optional</sup> <a name="SourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges"></a>

```csharp
public string[] SourceNatDrainRanges { get; set; }
```

- *Type:* string[]

A list of URLs of subnetworks representing source ranges to be drained.

This is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#source_nat_drain_ranges GoogleComputeRouterNat#source_nat_drain_ranges}

---

### GoogleComputeRouterNatSubnetwork <a name="GoogleComputeRouterNatSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatSubnetwork {
    string Name,
    string[] SourceIpRangesToNat,
    string[] SecondaryIpRangeNames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name">Name</a></code> | <code>string</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat">SourceIpRangesToNat</a></code> | <code>string[]</code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames">SecondaryIpRangeNames</a></code> | <code>string[]</code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `SourceIpRangesToNat`<sup>Required</sup> <a name="SourceIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```csharp
public string[] SourceIpRangesToNat { get; set; }
```

- *Type:* string[]

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#source_ip_ranges_to_nat GoogleComputeRouterNat#source_ip_ranges_to_nat}

---

##### `SecondaryIpRangeNames`<sup>Optional</sup> <a name="SecondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```csharp
public string[] SecondaryIpRangeNames { get; set; }
```

- *Type:* string[]

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#secondary_ip_range_names GoogleComputeRouterNat#secondary_ip_range_names}

---

### GoogleComputeRouterNatTimeouts <a name="GoogleComputeRouterNatTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterNatLogConfigOutputReference <a name="GoogleComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatLogConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput">EnableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable">Enable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInput`<sup>Optional</sup> <a name="EnableInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```csharp
public object EnableInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `Enable`<sup>Required</sup> <a name="Enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable"></a>

```csharp
public object Enable { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRouterNatLogConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---


### GoogleComputeRouterNatRulesActionOutputReference <a name="GoogleComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatRulesActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">ResetSourceNatActiveIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges">ResetSourceNatActiveRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">ResetSourceNatDrainIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges">ResetSourceNatDrainRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceNatActiveIps` <a name="ResetSourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```csharp
private void ResetSourceNatActiveIps()
```

##### `ResetSourceNatActiveRanges` <a name="ResetSourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges"></a>

```csharp
private void ResetSourceNatActiveRanges()
```

##### `ResetSourceNatDrainIps` <a name="ResetSourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```csharp
private void ResetSourceNatDrainIps()
```

##### `ResetSourceNatDrainRanges` <a name="ResetSourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges"></a>

```csharp
private void ResetSourceNatDrainRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">SourceNatActiveIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput">SourceNatActiveRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">SourceNatDrainIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput">SourceNatDrainRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">SourceNatActiveIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges">SourceNatActiveRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">SourceNatDrainIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges">SourceNatDrainRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceNatActiveIpsInput`<sup>Optional</sup> <a name="SourceNatActiveIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```csharp
public string[] SourceNatActiveIpsInput { get; }
```

- *Type:* string[]

---

##### `SourceNatActiveRangesInput`<sup>Optional</sup> <a name="SourceNatActiveRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput"></a>

```csharp
public string[] SourceNatActiveRangesInput { get; }
```

- *Type:* string[]

---

##### `SourceNatDrainIpsInput`<sup>Optional</sup> <a name="SourceNatDrainIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```csharp
public string[] SourceNatDrainIpsInput { get; }
```

- *Type:* string[]

---

##### `SourceNatDrainRangesInput`<sup>Optional</sup> <a name="SourceNatDrainRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput"></a>

```csharp
public string[] SourceNatDrainRangesInput { get; }
```

- *Type:* string[]

---

##### `SourceNatActiveIps`<sup>Required</sup> <a name="SourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```csharp
public string[] SourceNatActiveIps { get; }
```

- *Type:* string[]

---

##### `SourceNatActiveRanges`<sup>Required</sup> <a name="SourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges"></a>

```csharp
public string[] SourceNatActiveRanges { get; }
```

- *Type:* string[]

---

##### `SourceNatDrainIps`<sup>Required</sup> <a name="SourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```csharp
public string[] SourceNatDrainIps { get; }
```

- *Type:* string[]

---

##### `SourceNatDrainRanges`<sup>Required</sup> <a name="SourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges"></a>

```csharp
public string[] SourceNatDrainRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeRouterNatRulesAction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---


### GoogleComputeRouterNatRulesList <a name="GoogleComputeRouterNatRulesList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get"></a>

```csharp
private GoogleComputeRouterNatRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterNatRulesOutputReference <a name="GoogleComputeRouterNatRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction"></a>

```csharp
private void PutAction(GoogleComputeRouterNatRulesAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput">RuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber">RuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action"></a>

```csharp
public GoogleComputeRouterNatRulesActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput"></a>

```csharp
public GoogleComputeRouterNatRulesAction ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `RuleNumberInput`<sup>Optional</sup> <a name="RuleNumberInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```csharp
public double RuleNumberInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `RuleNumber`<sup>Required</sup> <a name="RuleNumber" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```csharp
public double RuleNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterNatSubnetworkList <a name="GoogleComputeRouterNatSubnetworkList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatSubnetworkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get"></a>

```csharp
private GoogleComputeRouterNatSubnetworkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterNatSubnetworkOutputReference <a name="GoogleComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatSubnetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">ResetSecondaryIpRangeNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryIpRangeNames` <a name="ResetSecondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```csharp
private void ResetSecondaryIpRangeNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">SecondaryIpRangeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">SourceIpRangesToNatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">SecondaryIpRangeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">SourceIpRangesToNat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecondaryIpRangeNamesInput`<sup>Optional</sup> <a name="SecondaryIpRangeNamesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```csharp
public string[] SecondaryIpRangeNamesInput { get; }
```

- *Type:* string[]

---

##### `SourceIpRangesToNatInput`<sup>Optional</sup> <a name="SourceIpRangesToNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```csharp
public string[] SourceIpRangesToNatInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecondaryIpRangeNames`<sup>Required</sup> <a name="SecondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```csharp
public string[] SecondaryIpRangeNames { get; }
```

- *Type:* string[]

---

##### `SourceIpRangesToNat`<sup>Required</sup> <a name="SourceIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```csharp
public string[] SourceIpRangesToNat { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleComputeRouterNatTimeoutsOutputReference <a name="GoogleComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRouterNatTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



