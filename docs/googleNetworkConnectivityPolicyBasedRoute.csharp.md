# `googleNetworkConnectivityPolicyBasedRoute` Submodule <a name="`googleNetworkConnectivityPolicyBasedRoute` Submodule" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityPolicyBasedRoute <a name="GoogleNetworkConnectivityPolicyBasedRoute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route google_network_connectivity_policy_based_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRoute(Construct Scope, string Id, GoogleNetworkConnectivityPolicyBasedRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig">GoogleNetworkConnectivityPolicyBasedRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig">GoogleNetworkConnectivityPolicyBasedRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment">PutInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine">PutVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment">ResetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp">ResetNextHopIlbIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes">ResetNextHopOtherRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetVirtualMachine">ResetVirtualMachine</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter"></a>

```csharp
private void PutFilter(GoogleNetworkConnectivityPolicyBasedRouteFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `PutInterconnectAttachment` <a name="PutInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment"></a>

```csharp
private void PutInterconnectAttachment(GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putInterconnectAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkConnectivityPolicyBasedRouteTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

---

##### `PutVirtualMachine` <a name="PutVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine"></a>

```csharp
private void PutVirtualMachine(GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInterconnectAttachment` <a name="ResetInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetInterconnectAttachment"></a>

```csharp
private void ResetInterconnectAttachment()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNextHopIlbIp` <a name="ResetNextHopIlbIp" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopIlbIp"></a>

```csharp
private void ResetNextHopIlbIp()
```

##### `ResetNextHopOtherRoutes` <a name="ResetNextHopOtherRoutes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetNextHopOtherRoutes"></a>

```csharp
private void ResetNextHopOtherRoutes()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualMachine` <a name="ResetVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.resetVirtualMachine"></a>

```csharp
private void ResetVirtualMachine()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityPolicyBasedRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityPolicyBasedRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityPolicyBasedRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkConnectivityPolicyBasedRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkConnectivityPolicyBasedRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkConnectivityPolicyBasedRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkConnectivityPolicyBasedRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityPolicyBasedRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference">GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachment">InterconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.warnings">Warnings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList">GoogleNetworkConnectivityPolicyBasedRouteWarningsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput">InterconnectAttachmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput">NextHopIlbIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput">NextHopOtherRoutesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachineInput">VirtualMachineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp">NextHopIlbIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes">NextHopOtherRoutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filter"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference">GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference</a>

---

##### `InterconnectAttachment`<sup>Required</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachment"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference InterconnectAttachment { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference">GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachine"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference VirtualMachine { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference</a>

---

##### `Warnings`<sup>Required</sup> <a name="Warnings" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.warnings"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteWarningsList Warnings { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList">GoogleNetworkConnectivityPolicyBasedRouteWarningsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.filterInput"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterconnectAttachmentInput`<sup>Optional</sup> <a name="InterconnectAttachmentInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.interconnectAttachmentInput"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment InterconnectAttachmentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NextHopIlbIpInput`<sup>Optional</sup> <a name="NextHopIlbIpInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIpInput"></a>

```csharp
public string NextHopIlbIpInput { get; }
```

- *Type:* string

---

##### `NextHopOtherRoutesInput`<sup>Optional</sup> <a name="NextHopOtherRoutesInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutesInput"></a>

```csharp
public string NextHopOtherRoutesInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.virtualMachineInput"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine VirtualMachineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NextHopIlbIp`<sup>Required</sup> <a name="NextHopIlbIp" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopIlbIp"></a>

```csharp
public string NextHopIlbIp { get; }
```

- *Type:* string

---

##### `NextHopOtherRoutes`<sup>Required</sup> <a name="NextHopOtherRoutes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.nextHopOtherRoutes"></a>

```csharp
public string NextHopOtherRoutes { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityPolicyBasedRouteConfig <a name="GoogleNetworkConnectivityPolicyBasedRouteConfig" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleNetworkConnectivityPolicyBasedRouteFilter Filter,
    string Name,
    string Network,
    string Description = null,
    string Id = null,
    GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment InterconnectAttachment = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string NextHopIlbIp = null,
    string NextHopOtherRoutes = null,
    double Priority = null,
    string Project = null,
    GoogleNetworkConnectivityPolicyBasedRouteTimeouts Timeouts = null,
    GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine VirtualMachine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.name">Name</a></code> | <code>string</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.network">Network</a></code> | <code>string</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment">InterconnectAttachment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | interconnect_attachment block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp">NextHopIlbIp</a></code> | <code>string</code> | The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes">NextHopOtherRoutes</a></code> | <code>string</code> | Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.priority">Priority</a></code> | <code>double</code> | The priority of this policy-based route. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | virtual_machine block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.filter"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#filter GoogleNetworkConnectivityPolicyBasedRoute#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#name GoogleNetworkConnectivityPolicyBasedRoute#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#network GoogleNetworkConnectivityPolicyBasedRoute#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#description GoogleNetworkConnectivityPolicyBasedRoute#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#id GoogleNetworkConnectivityPolicyBasedRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterconnectAttachment`<sup>Optional</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.interconnectAttachment"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment InterconnectAttachment { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

interconnect_attachment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#interconnect_attachment GoogleNetworkConnectivityPolicyBasedRoute#interconnect_attachment}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#labels GoogleNetworkConnectivityPolicyBasedRoute#labels}

---

##### `NextHopIlbIp`<sup>Optional</sup> <a name="NextHopIlbIp" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopIlbIp"></a>

```csharp
public string NextHopIlbIp { get; set; }
```

- *Type:* string

The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_ilb_ip GoogleNetworkConnectivityPolicyBasedRoute#next_hop_ilb_ip}

---

##### `NextHopOtherRoutes`<sup>Optional</sup> <a name="NextHopOtherRoutes" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.nextHopOtherRoutes"></a>

```csharp
public string NextHopOtherRoutes { get; set; }
```

- *Type:* string

Other routes that will be referenced to determine the next hop of the packet. Possible values: ["DEFAULT_ROUTING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#next_hop_other_routes GoogleNetworkConnectivityPolicyBasedRoute#next_hop_other_routes}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

The priority of this policy-based route.

Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#priority GoogleNetworkConnectivityPolicyBasedRoute#priority}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#project GoogleNetworkConnectivityPolicyBasedRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.timeouts"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts">GoogleNetworkConnectivityPolicyBasedRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#timeouts GoogleNetworkConnectivityPolicyBasedRoute#timeouts}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteConfig.property.virtualMachine"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine VirtualMachine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#virtual_machine GoogleNetworkConnectivityPolicyBasedRoute#virtual_machine}

---

### GoogleNetworkConnectivityPolicyBasedRouteFilter <a name="GoogleNetworkConnectivityPolicyBasedRouteFilter" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteFilter {
    string ProtocolVersion,
    string DestRange = null,
    string IpProtocol = null,
    string SrcRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.destRange">DestRange</a></code> | <code>string</code> | The destination IP range of outgoing packets that this policy-based route applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.srcRange">SrcRange</a></code> | <code>string</code> | The source IP range of outgoing packets that this policy-based route applies to. |

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; set; }
```

- *Type:* string

Internet protocol versions this policy-based route applies to. Possible values: ["IPV4"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#protocol_version GoogleNetworkConnectivityPolicyBasedRoute#protocol_version}

---

##### `DestRange`<sup>Optional</sup> <a name="DestRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.destRange"></a>

```csharp
public string DestRange { get; set; }
```

- *Type:* string

The destination IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#dest_range GoogleNetworkConnectivityPolicyBasedRoute#dest_range}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol that this policy-based route applies to. Valid values are 'TCP', 'UDP', and 'ALL'. Default is 'ALL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#ip_protocol GoogleNetworkConnectivityPolicyBasedRoute#ip_protocol}

---

##### `SrcRange`<sup>Optional</sup> <a name="SrcRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter.property.srcRange"></a>

```csharp
public string SrcRange { get; set; }
```

- *Type:* string

The source IP range of outgoing packets that this policy-based route applies to.

Default is "0.0.0.0/0" if protocol version is IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#src_range GoogleNetworkConnectivityPolicyBasedRoute#src_range}

---

### GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment <a name="GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment {
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region">Region</a></code> | <code>string</code> | Cloud region to install this policy-based route on for Interconnect attachments. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Cloud region to install this policy-based route on for Interconnect attachments.

Use 'all' to install it on all Interconnect attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#region GoogleNetworkConnectivityPolicyBasedRoute#region}

---

### GoogleNetworkConnectivityPolicyBasedRouteTimeouts <a name="GoogleNetworkConnectivityPolicyBasedRouteTimeouts" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#create GoogleNetworkConnectivityPolicyBasedRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#delete GoogleNetworkConnectivityPolicyBasedRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#update GoogleNetworkConnectivityPolicyBasedRoute#update}.

---

### GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine <a name="GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine {
    string[] Tags
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags">Tags</a></code> | <code>string[]</code> | A list of VM instance tags that this policy-based route applies to. |

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of VM instance tags that this policy-based route applies to.

VM instances that have ANY of tags specified here will install this PBR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_network_connectivity_policy_based_route#tags GoogleNetworkConnectivityPolicyBasedRoute#tags}

---

### GoogleNetworkConnectivityPolicyBasedRouteWarnings <a name="GoogleNetworkConnectivityPolicyBasedRouteWarnings" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteWarnings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange">ResetDestRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange">ResetSrcRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestRange` <a name="ResetDestRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetDestRange"></a>

```csharp
private void ResetDestRange()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetIpProtocol"></a>

```csharp
private void ResetIpProtocol()
```

##### `ResetSrcRange` <a name="ResetSrcRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.resetSrcRange"></a>

```csharp
private void ResetSrcRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput">DestRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput">ProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput">SrcRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange">DestRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion">ProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange">SrcRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestRangeInput`<sup>Optional</sup> <a name="DestRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRangeInput"></a>

```csharp
public string DestRangeInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `ProtocolVersionInput`<sup>Optional</sup> <a name="ProtocolVersionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersionInput"></a>

```csharp
public string ProtocolVersionInput { get; }
```

- *Type:* string

---

##### `SrcRangeInput`<sup>Optional</sup> <a name="SrcRangeInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRangeInput"></a>

```csharp
public string SrcRangeInput { get; }
```

- *Type:* string

---

##### `DestRange`<sup>Required</sup> <a name="DestRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.destRange"></a>

```csharp
public string DestRange { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `ProtocolVersion`<sup>Required</sup> <a name="ProtocolVersion" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.protocolVersion"></a>

```csharp
public string ProtocolVersion { get; }
```

- *Type:* string

---

##### `SrcRange`<sup>Required</sup> <a name="SrcRange" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.srcRange"></a>

```csharp
public string SrcRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteFilter">GoogleNetworkConnectivityPolicyBasedRouteFilter</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachmentOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment">GoogleNetworkConnectivityPolicyBasedRouteInterconnectAttachment</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachineOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine">GoogleNetworkConnectivityPolicyBasedRouteVirtualMachine</a>

---


### GoogleNetworkConnectivityPolicyBasedRouteWarningsList <a name="GoogleNetworkConnectivityPolicyBasedRouteWarningsList" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteWarningsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get"></a>

```csharp
private GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference <a name="GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data">Data</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage">WarningMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings">GoogleNetworkConnectivityPolicyBasedRouteWarnings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.data"></a>

```csharp
public StringMap Data { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `WarningMessage`<sup>Required</sup> <a name="WarningMessage" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.warningMessage"></a>

```csharp
public string WarningMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarningsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkConnectivityPolicyBasedRouteWarnings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkConnectivityPolicyBasedRoute.GoogleNetworkConnectivityPolicyBasedRouteWarnings">GoogleNetworkConnectivityPolicyBasedRouteWarnings</a>

---



