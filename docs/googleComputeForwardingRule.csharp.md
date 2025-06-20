# `googleComputeForwardingRule` Submodule <a name="`googleComputeForwardingRule` Submodule" id="@cdktf/provider-google-beta.googleComputeForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeForwardingRule <a name="GoogleComputeForwardingRule" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule google_compute_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeForwardingRule(Construct Scope, string Id, GoogleComputeForwardingRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig">GoogleComputeForwardingRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig">GoogleComputeForwardingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations">PutServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowGlobalAccess">ResetAllowGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowPscGlobalAccess">ResetAllowPscGlobalAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllPorts">ResetAllPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetBackendService">ResetBackendService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpCollection">ResetIpCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpProtocol">ResetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpVersion">ResetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIsMirroringCollector">ResetIsMirroringCollector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLoadBalancingScheme">ResetLoadBalancingScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetworkTier">ResetNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNoAutomateDnsZone">ResetNoAutomateDnsZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRecreateClosedPsc">ResetRecreateClosedPsc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceDirectoryRegistrations">ResetServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceLabel">ResetServiceLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSourceIpRanges">ResetSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServiceDirectoryRegistrations` <a name="PutServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations"></a>

```csharp
private void PutServiceDirectoryRegistrations(GoogleComputeForwardingRuleServiceDirectoryRegistrations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putServiceDirectoryRegistrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeForwardingRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

---

##### `ResetAllowGlobalAccess` <a name="ResetAllowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowGlobalAccess"></a>

```csharp
private void ResetAllowGlobalAccess()
```

##### `ResetAllowPscGlobalAccess` <a name="ResetAllowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllowPscGlobalAccess"></a>

```csharp
private void ResetAllowPscGlobalAccess()
```

##### `ResetAllPorts` <a name="ResetAllPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetAllPorts"></a>

```csharp
private void ResetAllPorts()
```

##### `ResetBackendService` <a name="ResetBackendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetBackendService"></a>

```csharp
private void ResetBackendService()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetIpCollection` <a name="ResetIpCollection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpCollection"></a>

```csharp
private void ResetIpCollection()
```

##### `ResetIpProtocol` <a name="ResetIpProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpProtocol"></a>

```csharp
private void ResetIpProtocol()
```

##### `ResetIpVersion` <a name="ResetIpVersion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIpVersion"></a>

```csharp
private void ResetIpVersion()
```

##### `ResetIsMirroringCollector` <a name="ResetIsMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetIsMirroringCollector"></a>

```csharp
private void ResetIsMirroringCollector()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLoadBalancingScheme` <a name="ResetLoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetLoadBalancingScheme"></a>

```csharp
private void ResetLoadBalancingScheme()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkTier` <a name="ResetNetworkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNetworkTier"></a>

```csharp
private void ResetNetworkTier()
```

##### `ResetNoAutomateDnsZone` <a name="ResetNoAutomateDnsZone" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetNoAutomateDnsZone"></a>

```csharp
private void ResetNoAutomateDnsZone()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPortRange"></a>

```csharp
private void ResetPortRange()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetPorts"></a>

```csharp
private void ResetPorts()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRecreateClosedPsc` <a name="ResetRecreateClosedPsc" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRecreateClosedPsc"></a>

```csharp
private void ResetRecreateClosedPsc()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServiceDirectoryRegistrations` <a name="ResetServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceDirectoryRegistrations"></a>

```csharp
private void ResetServiceDirectoryRegistrations()
```

##### `ResetServiceLabel` <a name="ResetServiceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetServiceLabel"></a>

```csharp
private void ResetServiceLabel()
```

##### `ResetSourceIpRanges` <a name="ResetSourceIpRanges" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSourceIpRanges"></a>

```csharp
private void ResetSourceIpRanges()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeForwardingRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeForwardingRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeForwardingRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeForwardingRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeForwardingRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeForwardingRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.baseForwardingRule">BaseForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forwardingRuleId">ForwardingRuleId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference">GoogleComputeForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccessInput">AllowGlobalAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccessInput">AllowPscGlobalAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPortsInput">AllPortsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendServiceInput">BackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollectionInput">IpCollectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersionInput">IpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollectorInput">IsMirroringCollectorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingSchemeInput">LoadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTierInput">NetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZoneInput">NoAutomateDnsZoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRangeInput">PortRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPscInput">RecreateClosedPscInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrationsInput">ServiceDirectoryRegistrationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabelInput">ServiceLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRangesInput">SourceIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccess">AllowPscGlobalAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPorts">AllPorts</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendService">BackendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollection">IpCollection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersion">IpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollector">IsMirroringCollector</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTier">NetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZone">NoAutomateDnsZone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRange">PortRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPsc">RecreateClosedPsc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabel">ServiceLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRanges">SourceIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BaseForwardingRule`<sup>Required</sup> <a name="BaseForwardingRule" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.baseForwardingRule"></a>

```csharp
public string BaseForwardingRule { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ForwardingRuleId`<sup>Required</sup> <a name="ForwardingRuleId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.forwardingRuleId"></a>

```csharp
public double ForwardingRuleId { get; }
```

- *Type:* double

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.pscConnectionStatus"></a>

```csharp
public string PscConnectionStatus { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServiceDirectoryRegistrations`<sup>Required</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrations"></a>

```csharp
public GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference ServiceDirectoryRegistrations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference">GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference</a>

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeouts"></a>

```csharp
public GoogleComputeForwardingRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference">GoogleComputeForwardingRuleTimeoutsOutputReference</a>

---

##### `AllowGlobalAccessInput`<sup>Optional</sup> <a name="AllowGlobalAccessInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccessInput"></a>

```csharp
public object AllowGlobalAccessInput { get; }
```

- *Type:* object

---

##### `AllowPscGlobalAccessInput`<sup>Optional</sup> <a name="AllowPscGlobalAccessInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccessInput"></a>

```csharp
public object AllowPscGlobalAccessInput { get; }
```

- *Type:* object

---

##### `AllPortsInput`<sup>Optional</sup> <a name="AllPortsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPortsInput"></a>

```csharp
public object AllPortsInput { get; }
```

- *Type:* object

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendServiceInput"></a>

```csharp
public string BackendServiceInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpCollectionInput`<sup>Optional</sup> <a name="IpCollectionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollectionInput"></a>

```csharp
public string IpCollectionInput { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `IpVersionInput`<sup>Optional</sup> <a name="IpVersionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersionInput"></a>

```csharp
public string IpVersionInput { get; }
```

- *Type:* string

---

##### `IsMirroringCollectorInput`<sup>Optional</sup> <a name="IsMirroringCollectorInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollectorInput"></a>

```csharp
public object IsMirroringCollectorInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingSchemeInput`<sup>Optional</sup> <a name="LoadBalancingSchemeInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingSchemeInput"></a>

```csharp
public string LoadBalancingSchemeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTierInput"></a>

```csharp
public string NetworkTierInput { get; }
```

- *Type:* string

---

##### `NoAutomateDnsZoneInput`<sup>Optional</sup> <a name="NoAutomateDnsZoneInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZoneInput"></a>

```csharp
public object NoAutomateDnsZoneInput { get; }
```

- *Type:* object

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRangeInput"></a>

```csharp
public string PortRangeInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RecreateClosedPscInput`<sup>Optional</sup> <a name="RecreateClosedPscInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPscInput"></a>

```csharp
public object RecreateClosedPscInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryRegistrationsInput`<sup>Optional</sup> <a name="ServiceDirectoryRegistrationsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceDirectoryRegistrationsInput"></a>

```csharp
public GoogleComputeForwardingRuleServiceDirectoryRegistrations ServiceDirectoryRegistrationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

---

##### `ServiceLabelInput`<sup>Optional</sup> <a name="ServiceLabelInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabelInput"></a>

```csharp
public string ServiceLabelInput { get; }
```

- *Type:* string

---

##### `SourceIpRangesInput`<sup>Optional</sup> <a name="SourceIpRangesInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRangesInput"></a>

```csharp
public string[] SourceIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowGlobalAccess`<sup>Required</sup> <a name="AllowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowGlobalAccess"></a>

```csharp
public object AllowGlobalAccess { get; }
```

- *Type:* object

---

##### `AllowPscGlobalAccess`<sup>Required</sup> <a name="AllowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allowPscGlobalAccess"></a>

```csharp
public object AllowPscGlobalAccess { get; }
```

- *Type:* object

---

##### `AllPorts`<sup>Required</sup> <a name="AllPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.allPorts"></a>

```csharp
public object AllPorts { get; }
```

- *Type:* object

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.backendService"></a>

```csharp
public string BackendService { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpCollection`<sup>Required</sup> <a name="IpCollection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipCollection"></a>

```csharp
public string IpCollection { get; }
```

- *Type:* string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `IpVersion`<sup>Required</sup> <a name="IpVersion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ipVersion"></a>

```csharp
public string IpVersion { get; }
```

- *Type:* string

---

##### `IsMirroringCollector`<sup>Required</sup> <a name="IsMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.isMirroringCollector"></a>

```csharp
public object IsMirroringCollector { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LoadBalancingScheme`<sup>Required</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.networkTier"></a>

```csharp
public string NetworkTier { get; }
```

- *Type:* string

---

##### `NoAutomateDnsZone`<sup>Required</sup> <a name="NoAutomateDnsZone" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.noAutomateDnsZone"></a>

```csharp
public object NoAutomateDnsZone { get; }
```

- *Type:* object

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.portRange"></a>

```csharp
public string PortRange { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RecreateClosedPsc`<sup>Required</sup> <a name="RecreateClosedPsc" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.recreateClosedPsc"></a>

```csharp
public object RecreateClosedPsc { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServiceLabel`<sup>Required</sup> <a name="ServiceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.serviceLabel"></a>

```csharp
public string ServiceLabel { get; }
```

- *Type:* string

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.sourceIpRanges"></a>

```csharp
public string[] SourceIpRanges { get; }
```

- *Type:* string[]

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeForwardingRuleConfig <a name="GoogleComputeForwardingRuleConfig" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeForwardingRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AllowGlobalAccess = null,
    object AllowPscGlobalAccess = null,
    object AllPorts = null,
    string BackendService = null,
    string Description = null,
    string Id = null,
    string IpAddress = null,
    string IpCollection = null,
    string IpProtocol = null,
    string IpVersion = null,
    object IsMirroringCollector = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string LoadBalancingScheme = null,
    string Network = null,
    string NetworkTier = null,
    object NoAutomateDnsZone = null,
    string PortRange = null,
    string[] Ports = null,
    string Project = null,
    object RecreateClosedPsc = null,
    string Region = null,
    GoogleComputeForwardingRuleServiceDirectoryRegistrations ServiceDirectoryRegistrations = null,
    string ServiceLabel = null,
    string[] SourceIpRanges = null,
    string Subnetwork = null,
    string Target = null,
    GoogleComputeForwardingRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowGlobalAccess">AllowGlobalAccess</a></code> | <code>object</code> | This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowPscGlobalAccess">AllowPscGlobalAccess</a></code> | <code>object</code> | This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allPorts">AllPorts</a></code> | <code>object</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.backendService">BackendService</a></code> | <code>string</code> | Identifies the backend service to which the forwarding rule sends traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#id GoogleComputeForwardingRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipAddress">IpAddress</a></code> | <code>string</code> | IP address for which this forwarding rule accepts traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipCollection">IpCollection</a></code> | <code>string</code> | Resource reference of a PublicDelegatedPrefix. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipVersion">IpVersion</a></code> | <code>string</code> | The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.isMirroringCollector">IsMirroringCollector</a></code> | <code>object</code> | Indicates whether or not this load balancer can be used as a collector for packet mirroring. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this forwarding rule.  A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.loadBalancingScheme">LoadBalancingScheme</a></code> | <code>string</code> | Specifies the forwarding rule type. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.network">Network</a></code> | <code>string</code> | This field is not used for external load balancing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.networkTier">NetworkTier</a></code> | <code>string</code> | This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.noAutomateDnsZone">NoAutomateDnsZone</a></code> | <code>object</code> | This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.portRange">PortRange</a></code> | <code>string</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ports">Ports</a></code> | <code>string[]</code> | The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#project GoogleComputeForwardingRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.recreateClosedPsc">RecreateClosedPsc</a></code> | <code>object</code> | This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.region">Region</a></code> | <code>string</code> | A reference to the region where the regional forwarding rule resides. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceDirectoryRegistrations">ServiceDirectoryRegistrations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a></code> | service_directory_registrations block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceLabel">ServiceLabel</a></code> | <code>string</code> | An optional prefix to the service name for this Forwarding Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.sourceIpRanges">SourceIpRanges</a></code> | <code>string[]</code> | If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.subnetwork">Subnetwork</a></code> | <code>string</code> | This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.target">Target</a></code> | <code>string</code> | The URL of the target resource to receive the matched traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).

Specifically, the name must be 1-63 characters long and match the regular
expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit, except the last character, which
cannot be a dash.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, the forwarding rule name must be a 1-20 characters string with
lowercase letters and numbers and must start with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#name GoogleComputeForwardingRule#name}

---

##### `AllowGlobalAccess`<sup>Optional</sup> <a name="AllowGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowGlobalAccess"></a>

```csharp
public object AllowGlobalAccess { get; set; }
```

- *Type:* object

This field is used along with the 'backend_service' field for internal load balancing or with the 'target' field for internal TargetInstance.

If the field is set to 'TRUE', clients can access ILB from all
regions.

Otherwise only allows access from clients in the same region as the
internal load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#allow_global_access GoogleComputeForwardingRule#allow_global_access}

---

##### `AllowPscGlobalAccess`<sup>Optional</sup> <a name="AllowPscGlobalAccess" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allowPscGlobalAccess"></a>

```csharp
public object AllowPscGlobalAccess { get; set; }
```

- *Type:* object

This is used in PSC consumer ForwardingRule to control whether the PSC endpoint can be accessed from another region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#allow_psc_global_access GoogleComputeForwardingRule#allow_psc_global_access}

---

##### `AllPorts`<sup>Optional</sup> <a name="AllPorts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.allPorts"></a>

```csharp
public object AllPorts { get; set; }
```

- *Type:* object

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'allPorts' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, SCTP, or
  L3_DEFAULT.
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal and external protocol forwarding.
* Set this field to true to allow packets addressed to any port or packets
  lacking destination port information (for example, UDP fragments after the
  first fragment) to be forwarded to the backends configured with this
  forwarding rule. The L3_DEFAULT protocol requires 'allPorts' be set to
  true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#all_ports GoogleComputeForwardingRule#all_ports}

---

##### `BackendService`<sup>Optional</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.backendService"></a>

```csharp
public string BackendService { get; set; }
```

- *Type:* string

Identifies the backend service to which the forwarding rule sends traffic.

Required for Internal TCP/UDP Load Balancing and Network Load Balancing;
must be omitted for all other load balancer types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#backend_service GoogleComputeForwardingRule#backend_service}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#description GoogleComputeForwardingRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#id GoogleComputeForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

IP address for which this forwarding rule accepts traffic.

When a client
sends traffic to this IP address, the forwarding rule directs the traffic
to the referenced 'target' or 'backendService'.

While creating a forwarding rule, specifying an 'IPAddress' is
required under the following circumstances:

* When the 'target' is set to 'targetGrpcProxy' and
  'validateForProxyless' is set to 'true', the
  'IPAddress' should be set to '0.0.0.0'.
* When the 'target' is a Private Service Connect Google APIs
  bundle, you must specify an 'IPAddress'.

Otherwise, you can optionally specify an IP address that references an
existing static (reserved) IP address resource. When omitted, Google Cloud
assigns an ephemeral IP address.

Use one of the following formats to specify an IP address while creating a
forwarding rule:

* IP address number, as in '100.1.2.3'
* IPv6 address range, as in '2600:1234::/96'
* Full resource URL, as in
  'https://www.googleapis.com/compute/v1/projects/project_id/regions/region/addresses/address-name'
* Partial URL or by name, as in:

  * 'projects/project_id/regions/region/addresses/address-name'
  * 'regions/region/addresses/address-name'
  * 'global/addresses/address-name'
  * 'address-name'

The forwarding rule's 'target' or 'backendService',
and in most cases, also the 'loadBalancingScheme', determine the
type of IP address that you can use. For detailed information, see
[IP address
specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).

When reading an 'IPAddress', the API always returns the IP
address number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#ip_address GoogleComputeForwardingRule#ip_address}

---

##### `IpCollection`<sup>Optional</sup> <a name="IpCollection" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipCollection"></a>

```csharp
public string IpCollection { get; set; }
```

- *Type:* string

Resource reference of a PublicDelegatedPrefix.

The PDP must be a sub-PDP
in EXTERNAL_IPV6_FORWARDING_RULE_CREATION mode.
Use one of the following formats to specify a sub-PDP when creating an
IPv6 NetLB forwarding rule using BYOIP:
Full resource URL, as in:

* 'https://www.googleapis.com/compute/v1/projects/{{projectId}}/regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'
  Partial URL, as in:
* 'projects/{{projectId}}/regions/region/publicDelegatedPrefixes/{{sub-pdp-name}}'
* 'regions/{{region}}/publicDelegatedPrefixes/{{sub-pdp-name}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#ip_collection GoogleComputeForwardingRule#ip_collection}

---

##### `IpProtocol`<sup>Optional</sup> <a name="IpProtocol" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol to which this rule applies.

For protocol forwarding, valid
options are 'TCP', 'UDP', 'ESP',
'AH', 'SCTP', 'ICMP' and
'L3_DEFAULT'.

The valid IP protocols are different for different load balancing products
as described in [Load balancing
features](https://cloud.google.com/load-balancing/docs/features#protocols_from_the_load_balancer_to_the_backends).

A Forwarding Rule with protocol L3_DEFAULT can attach with target instance or
backend service with UNSPECIFIED protocol.
A forwarding rule with "L3_DEFAULT" IPProtocal cannot be attached to a backend service with TCP or UDP. Possible values: ["TCP", "UDP", "ESP", "AH", "SCTP", "ICMP", "L3_DEFAULT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#ip_protocol GoogleComputeForwardingRule#ip_protocol}

---

##### `IpVersion`<sup>Optional</sup> <a name="IpVersion" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ipVersion"></a>

```csharp
public string IpVersion { get; set; }
```

- *Type:* string

The IP address version that will be used by this forwarding rule. Valid options are IPV4 and IPV6.

If not set, the IPv4 address will be used by default. Possible values: ["IPV4", "IPV6"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#ip_version GoogleComputeForwardingRule#ip_version}

---

##### `IsMirroringCollector`<sup>Optional</sup> <a name="IsMirroringCollector" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.isMirroringCollector"></a>

```csharp
public object IsMirroringCollector { get; set; }
```

- *Type:* object

Indicates whether or not this load balancer can be used as a collector for packet mirroring.

To prevent mirroring loops, instances behind this
load balancer will not have their traffic mirrored even if a
'PacketMirroring' rule applies to them.

This can only be set to true for load balancers that have their
'loadBalancingScheme' set to 'INTERNAL'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#is_mirroring_collector GoogleComputeForwardingRule#is_mirroring_collector}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this forwarding rule.  A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#labels GoogleComputeForwardingRule#labels}

---

##### `LoadBalancingScheme`<sup>Optional</sup> <a name="LoadBalancingScheme" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.loadBalancingScheme"></a>

```csharp
public string LoadBalancingScheme { get; set; }
```

- *Type:* string

Specifies the forwarding rule type.

Note that an empty string value ('""') is also supported for some use
cases, for example PSC (private service connection) regional forwarding
rules.

For more information about forwarding rules, refer to
[Forwarding rule concepts](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts). Default value: "EXTERNAL" Possible values: ["EXTERNAL", "EXTERNAL_MANAGED", "INTERNAL", "INTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#load_balancing_scheme GoogleComputeForwardingRule#load_balancing_scheme}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

This field is not used for external load balancing.

For Internal TCP/UDP Load Balancing, this field identifies the network that
the load balanced IP should belong to for this Forwarding Rule.
If the subnetwork is specified, the network of the subnetwork will be used.
If neither subnetwork nor this field is specified, the default network will
be used.

For Private Service Connect forwarding rules that forward traffic to Google
APIs, a network must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#network GoogleComputeForwardingRule#network}

---

##### `NetworkTier`<sup>Optional</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.networkTier"></a>

```csharp
public string NetworkTier { get; set; }
```

- *Type:* string

This signifies the networking tier used for configuring this load balancer and can only take the following values: 'PREMIUM', 'STANDARD'.

For regional ForwardingRule, the valid values are 'PREMIUM' and
'STANDARD'. For GlobalForwardingRule, the valid value is
'PREMIUM'.

If this field is not specified, it is assumed to be 'PREMIUM'.
If 'IPAddress' is specified, this value must be equal to the
networkTier of the Address. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#network_tier GoogleComputeForwardingRule#network_tier}

---

##### `NoAutomateDnsZone`<sup>Optional</sup> <a name="NoAutomateDnsZone" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.noAutomateDnsZone"></a>

```csharp
public object NoAutomateDnsZone { get; set; }
```

- *Type:* object

This is used in PSC consumer ForwardingRule to control whether it should try to auto-generate a DNS zone or not.

Non-PSC forwarding rules do not use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#no_automate_dns_zone GoogleComputeForwardingRule#no_automate_dns_zone}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.portRange"></a>

```csharp
public string PortRange { get; set; }
```

- *Type:* string

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'portRange' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: external passthrough
  Network Load Balancers, internal and external proxy Network Load
  Balancers, internal and external Application Load Balancers, external
  protocol forwarding, and Classic VPN.
* Some products have restrictions on what ports can be used. See
  [port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#port_specifications)
  for details.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair, and cannot have overlapping
'portRange's.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair, and
cannot have overlapping 'portRange's.

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

The 'ports', 'portRange', and 'allPorts' fields are mutually exclusive.

Only packets addressed to ports in the specified range will be forwarded
to the backends configured with this forwarding rule.

The 'ports' field has the following limitations:

* It requires that the forwarding rule 'IPProtocol' be TCP, UDP, or SCTP,
  and
* It's applicable only to the following products: internal passthrough
  Network Load Balancers, backend service-based external passthrough Network
  Load Balancers, and internal protocol forwarding.
* You can specify a list of up to five ports by number, separated by
  commas. The ports can be contiguous or discontiguous.

For external forwarding rules, two or more forwarding rules cannot use the
same '[IPAddress, IPProtocol]' pair if they share at least one port
number.

For internal forwarding rules within the same VPC network, two or more
forwarding rules cannot use the same '[IPAddress, IPProtocol]' pair if
they share at least one port number.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#project GoogleComputeForwardingRule#project}.

---

##### `RecreateClosedPsc`<sup>Optional</sup> <a name="RecreateClosedPsc" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.recreateClosedPsc"></a>

```csharp
public object RecreateClosedPsc { get; set; }
```

- *Type:* object

This is used in PSC consumer ForwardingRule to make terraform recreate the ForwardingRule when the status is closed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#recreate_closed_psc GoogleComputeForwardingRule#recreate_closed_psc}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A reference to the region where the regional forwarding rule resides.

This field is not applicable to global forwarding rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#region GoogleComputeForwardingRule#region}

---

##### `ServiceDirectoryRegistrations`<sup>Optional</sup> <a name="ServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceDirectoryRegistrations"></a>

```csharp
public GoogleComputeForwardingRuleServiceDirectoryRegistrations ServiceDirectoryRegistrations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

service_directory_registrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#service_directory_registrations GoogleComputeForwardingRule#service_directory_registrations}

---

##### `ServiceLabel`<sup>Optional</sup> <a name="ServiceLabel" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.serviceLabel"></a>

```csharp
public string ServiceLabel { get; set; }
```

- *Type:* string

An optional prefix to the service name for this Forwarding Rule.

If specified, will be the first label of the fully qualified service
name.

The label must be 1-63 characters long, and comply with RFC1035.
Specifically, the label must be 1-63 characters long and match the
regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

This field is only used for INTERNAL load balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#service_label GoogleComputeForwardingRule#service_label}

---

##### `SourceIpRanges`<sup>Optional</sup> <a name="SourceIpRanges" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.sourceIpRanges"></a>

```csharp
public string[] SourceIpRanges { get; set; }
```

- *Type:* string[]

If not empty, this Forwarding Rule will only forward the traffic when the source IP address matches one of the IP addresses or CIDR ranges set here.

Note that a Forwarding Rule can only have up to 64 source IP ranges, and this field can only be used with a regional Forwarding Rule whose scheme is EXTERNAL. Each sourceIpRange entry should be either an IP address (for example, 1.2.3.4) or a CIDR range (for example, 1.2.3.0/24).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#source_ip_ranges GoogleComputeForwardingRule#source_ip_ranges}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

This field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule, used in internal load balancing and network load balancing with IPv6.

If the network specified is in auto subnet mode, this field is optional.
However, a subnetwork must be specified if the network is in custom subnet
mode or when creating external forwarding rule with IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#subnetwork GoogleComputeForwardingRule#subnetwork}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

The URL of the target resource to receive the matched traffic.

For
regional forwarding rules, this target must be in the same region as the
forwarding rule. For global forwarding rules, this target must be a global
load balancing resource.

The forwarded traffic must be of a type appropriate to the target object.

* For load balancers, see the "Target" column in [Port specifications](https://cloud.google.com/load-balancing/docs/forwarding-rule-concepts#ip_address_specifications).
* For Private Service Connect forwarding rules that forward traffic to Google APIs, provide the name of a supported Google API bundle:
* 'vpc-sc' - [ APIs that support VPC Service Controls](https://cloud.google.com/vpc-service-controls/docs/supported-products).
* 'all-apis' - [All supported Google APIs](https://cloud.google.com/vpc/docs/private-service-connect#supported-apis).

For Private Service Connect forwarding rules that forward traffic to managed services, the target must be a service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#target GoogleComputeForwardingRule#target}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleConfig.property.timeouts"></a>

```csharp
public GoogleComputeForwardingRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts">GoogleComputeForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#timeouts GoogleComputeForwardingRule#timeouts}

---

### GoogleComputeForwardingRuleServiceDirectoryRegistrations <a name="GoogleComputeForwardingRuleServiceDirectoryRegistrations" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeForwardingRuleServiceDirectoryRegistrations {
    string Namespace = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.namespace">Namespace</a></code> | <code>string</code> | Service Directory namespace to register the forwarding rule under. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.service">Service</a></code> | <code>string</code> | Service Directory service to register the forwarding rule under. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Service Directory namespace to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#namespace GoogleComputeForwardingRule#namespace}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Service Directory service to register the forwarding rule under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#service GoogleComputeForwardingRule#service}

---

### GoogleComputeForwardingRuleTimeouts <a name="GoogleComputeForwardingRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeForwardingRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#create GoogleComputeForwardingRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#delete GoogleComputeForwardingRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#update GoogleComputeForwardingRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#create GoogleComputeForwardingRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#delete GoogleComputeForwardingRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_forwarding_rule#update GoogleComputeForwardingRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference <a name="GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference.property.internalValue"></a>

```csharp
public GoogleComputeForwardingRuleServiceDirectoryRegistrations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleServiceDirectoryRegistrations">GoogleComputeForwardingRuleServiceDirectoryRegistrations</a>

---


### GoogleComputeForwardingRuleTimeoutsOutputReference <a name="GoogleComputeForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeForwardingRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeForwardingRule.GoogleComputeForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



