# `googleNetworkManagementConnectivityTest` Submodule <a name="`googleNetworkManagementConnectivityTest` Submodule" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkManagementConnectivityTest <a name="GoogleNetworkManagementConnectivityTest" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test google_network_management_connectivity_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTest(Construct Scope, string Id, GoogleNetworkManagementConnectivityTestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig">GoogleNetworkManagementConnectivityTestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig">GoogleNetworkManagementConnectivityTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetBypassFirewallChecks">ResetBypassFirewallChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRelatedProjects">ResetRelatedProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRoundTrip">ResetRoundTrip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestination` <a name="PutDestination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination"></a>

```csharp
private void PutDestination(GoogleNetworkManagementConnectivityTestDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource"></a>

```csharp
private void PutSource(GoogleNetworkManagementConnectivityTestSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkManagementConnectivityTestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>

---

##### `ResetBypassFirewallChecks` <a name="ResetBypassFirewallChecks" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetBypassFirewallChecks"></a>

```csharp
private void ResetBypassFirewallChecks()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRelatedProjects` <a name="ResetRelatedProjects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRelatedProjects"></a>

```csharp
private void ResetRelatedProjects()
```

##### `ResetRoundTrip` <a name="ResetRoundTrip" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetRoundTrip"></a>

```csharp
private void ResetRoundTrip()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkManagementConnectivityTest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkManagementConnectivityTest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkManagementConnectivityTest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkManagementConnectivityTest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkManagementConnectivityTest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkManagementConnectivityTest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkManagementConnectivityTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkManagementConnectivityTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference">GoogleNetworkManagementConnectivityTestDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference">GoogleNetworkManagementConnectivityTestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference">GoogleNetworkManagementConnectivityTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.bypassFirewallChecksInput">BypassFirewallChecksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destinationInput">DestinationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjectsInput">RelatedProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.roundTripInput">RoundTripInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.bypassFirewallChecks">BypassFirewallChecks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjects">RelatedProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.roundTrip">RoundTrip</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destination"></a>

```csharp
public GoogleNetworkManagementConnectivityTestDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference">GoogleNetworkManagementConnectivityTestDestinationOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.source"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference">GoogleNetworkManagementConnectivityTestSourceOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeouts"></a>

```csharp
public GoogleNetworkManagementConnectivityTestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference">GoogleNetworkManagementConnectivityTestTimeoutsOutputReference</a>

---

##### `BypassFirewallChecksInput`<sup>Optional</sup> <a name="BypassFirewallChecksInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.bypassFirewallChecksInput"></a>

```csharp
public object BypassFirewallChecksInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.destinationInput"></a>

```csharp
public GoogleNetworkManagementConnectivityTestDestination DestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RelatedProjectsInput`<sup>Optional</sup> <a name="RelatedProjectsInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjectsInput"></a>

```csharp
public string[] RelatedProjectsInput { get; }
```

- *Type:* string[]

---

##### `RoundTripInput`<sup>Optional</sup> <a name="RoundTripInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.roundTripInput"></a>

```csharp
public object RoundTripInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.sourceInput"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BypassFirewallChecks`<sup>Required</sup> <a name="BypassFirewallChecks" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.bypassFirewallChecks"></a>

```csharp
public object BypassFirewallChecks { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `RelatedProjects`<sup>Required</sup> <a name="RelatedProjects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.relatedProjects"></a>

```csharp
public string[] RelatedProjects { get; }
```

- *Type:* string[]

---

##### `RoundTrip`<sup>Required</sup> <a name="RoundTrip" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.roundTrip"></a>

```csharp
public object RoundTrip { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkManagementConnectivityTestConfig <a name="GoogleNetworkManagementConnectivityTestConfig" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleNetworkManagementConnectivityTestDestination Destination,
    string Name,
    GoogleNetworkManagementConnectivityTestSource Source,
    object BypassFirewallChecks = null,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string Protocol = null,
    string[] RelatedProjects = null,
    object RoundTrip = null,
    GoogleNetworkManagementConnectivityTestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.destination">Destination</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.bypassFirewallChecks">BypassFirewallChecks</a></code> | <code>object</code> | Whether the analysis should skip firewall checking. Default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.description">Description</a></code> | <code>string</code> | The user-supplied description of the Connectivity Test. Maximum of 512 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.protocol">Protocol</a></code> | <code>string</code> | IP Protocol of the test. When not provided, "TCP" is assumed. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.relatedProjects">RelatedProjects</a></code> | <code>string[]</code> | Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.roundTrip">RoundTrip</a></code> | <code>object</code> | Whether run analysis for the return path from destination to source. Default value is false. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.destination"></a>

```csharp
public GoogleNetworkManagementConnectivityTestDestination Destination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#destination GoogleNetworkManagementConnectivityTest#destination}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#name GoogleNetworkManagementConnectivityTest#name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.source"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#source GoogleNetworkManagementConnectivityTest#source}

---

##### `BypassFirewallChecks`<sup>Optional</sup> <a name="BypassFirewallChecks" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.bypassFirewallChecks"></a>

```csharp
public object BypassFirewallChecks { get; set; }
```

- *Type:* object

Whether the analysis should skip firewall checking. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#bypass_firewall_checks GoogleNetworkManagementConnectivityTest#bypass_firewall_checks}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The user-supplied description of the Connectivity Test. Maximum of 512 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#description GoogleNetworkManagementConnectivityTest#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#id GoogleNetworkManagementConnectivityTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#labels GoogleNetworkManagementConnectivityTest#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#project GoogleNetworkManagementConnectivityTest#project}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

IP Protocol of the test. When not provided, "TCP" is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#protocol GoogleNetworkManagementConnectivityTest#protocol}

---

##### `RelatedProjects`<sup>Optional</sup> <a name="RelatedProjects" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.relatedProjects"></a>

```csharp
public string[] RelatedProjects { get; set; }
```

- *Type:* string[]

Other projects that may be relevant for reachability analysis. This is applicable to scenarios where a test can cross project boundaries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#related_projects GoogleNetworkManagementConnectivityTest#related_projects}

---

##### `RoundTrip`<sup>Optional</sup> <a name="RoundTrip" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.roundTrip"></a>

```csharp
public object RoundTrip { get; set; }
```

- *Type:* object

Whether run analysis for the return path from destination to source. Default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#round_trip GoogleNetworkManagementConnectivityTest#round_trip}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestConfig.property.timeouts"></a>

```csharp
public GoogleNetworkManagementConnectivityTestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts">GoogleNetworkManagementConnectivityTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#timeouts GoogleNetworkManagementConnectivityTest#timeouts}

---

### GoogleNetworkManagementConnectivityTestDestination <a name="GoogleNetworkManagementConnectivityTestDestination" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestDestination {
    string CloudSqlInstance = null,
    string ForwardingRule = null,
    string Fqdn = null,
    string GkeMasterCluster = null,
    string Instance = null,
    string IpAddress = null,
    string Network = null,
    double Port = null,
    string ProjectId = null,
    string RedisCluster = null,
    string RedisInstance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | A Cloud SQL instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints, and Protocol Forwarding. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.fqdn">Fqdn</a></code> | <code>string</code> | A DNS endpoint of Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | A cluster URI for Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.instance">Instance</a></code> | <code>string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.ipAddress">IpAddress</a></code> | <code>string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.network">Network</a></code> | <code>string</code> | A VPC network URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.port">Port</a></code> | <code>double</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.projectId">ProjectId</a></code> | <code>string</code> | Project ID where the endpoint is located. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.redisCluster">RedisCluster</a></code> | <code>string</code> | A Redis Cluster URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.redisInstance">RedisInstance</a></code> | <code>string</code> | A Redis Instance URI. |

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; set; }
```

- *Type:* string

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#cloud_sql_instance GoogleNetworkManagementConnectivityTest#cloud_sql_instance}

---

##### `ForwardingRule`<sup>Optional</sup> <a name="ForwardingRule" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; set; }
```

- *Type:* string

Forwarding rule URI. Forwarding rules are frontends for load balancers, PSC endpoints, and Protocol Forwarding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#forwarding_rule GoogleNetworkManagementConnectivityTest#forwarding_rule}

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.fqdn"></a>

```csharp
public string Fqdn { get; set; }
```

- *Type:* string

A DNS endpoint of Google Kubernetes Engine cluster control plane.

Requires gke_master_cluster to be set, can't be used simultaneoulsly with
ip_address or network. Applicable only to destination endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#fqdn GoogleNetworkManagementConnectivityTest#fqdn}

---

##### `GkeMasterCluster`<sup>Optional</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; set; }
```

- *Type:* string

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#gke_master_cluster GoogleNetworkManagementConnectivityTest#gke_master_cluster}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

##### `RedisCluster`<sup>Optional</sup> <a name="RedisCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.redisCluster"></a>

```csharp
public string RedisCluster { get; set; }
```

- *Type:* string

A Redis Cluster URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#redis_cluster GoogleNetworkManagementConnectivityTest#redis_cluster}

---

##### `RedisInstance`<sup>Optional</sup> <a name="RedisInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination.property.redisInstance"></a>

```csharp
public string RedisInstance { get; set; }
```

- *Type:* string

A Redis Instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#redis_instance GoogleNetworkManagementConnectivityTest#redis_instance}

---

### GoogleNetworkManagementConnectivityTestSource <a name="GoogleNetworkManagementConnectivityTestSource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSource {
    GoogleNetworkManagementConnectivityTestSourceAppEngineVersion AppEngineVersion = null,
    GoogleNetworkManagementConnectivityTestSourceCloudFunction CloudFunction = null,
    GoogleNetworkManagementConnectivityTestSourceCloudRunRevision CloudRunRevision = null,
    string CloudSqlInstance = null,
    string GkeMasterCluster = null,
    string Instance = null,
    string IpAddress = null,
    string Network = null,
    string NetworkType = null,
    double Port = null,
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.appEngineVersion">AppEngineVersion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion">GoogleNetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | app_engine_version block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction">GoogleNetworkManagementConnectivityTestSourceCloudFunction</a></code> | cloud_function block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.cloudRunRevision">CloudRunRevision</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision">GoogleNetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | cloud_run_revision block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | A Cloud SQL instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | A cluster URI for Google Kubernetes Engine cluster control plane. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.instance">Instance</a></code> | <code>string</code> | A Compute Engine instance URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.ipAddress">IpAddress</a></code> | <code>string</code> | The IP address of the endpoint, which can be an external or internal IP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.network">Network</a></code> | <code>string</code> | A VPC network URI. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.networkType">NetworkType</a></code> | <code>string</code> | Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.port">Port</a></code> | <code>double</code> | The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.projectId">ProjectId</a></code> | <code>string</code> | Project ID where the endpoint is located. |

---

##### `AppEngineVersion`<sup>Optional</sup> <a name="AppEngineVersion" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.appEngineVersion"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceAppEngineVersion AppEngineVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion">GoogleNetworkManagementConnectivityTestSourceAppEngineVersion</a>

app_engine_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#app_engine_version GoogleNetworkManagementConnectivityTest#app_engine_version}

---

##### `CloudFunction`<sup>Optional</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.cloudFunction"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudFunction CloudFunction { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction">GoogleNetworkManagementConnectivityTestSourceCloudFunction</a>

cloud_function block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#cloud_function GoogleNetworkManagementConnectivityTest#cloud_function}

---

##### `CloudRunRevision`<sup>Optional</sup> <a name="CloudRunRevision" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.cloudRunRevision"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudRunRevision CloudRunRevision { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision">GoogleNetworkManagementConnectivityTestSourceCloudRunRevision</a>

cloud_run_revision block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#cloud_run_revision GoogleNetworkManagementConnectivityTest#cloud_run_revision}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; set; }
```

- *Type:* string

A Cloud SQL instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#cloud_sql_instance GoogleNetworkManagementConnectivityTest#cloud_sql_instance}

---

##### `GkeMasterCluster`<sup>Optional</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; set; }
```

- *Type:* string

A cluster URI for Google Kubernetes Engine cluster control plane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#gke_master_cluster GoogleNetworkManagementConnectivityTest#gke_master_cluster}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

A Compute Engine instance URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#instance GoogleNetworkManagementConnectivityTest#instance}

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

The IP address of the endpoint, which can be an external or internal IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#ip_address GoogleNetworkManagementConnectivityTest#ip_address}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

A VPC network URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#network GoogleNetworkManagementConnectivityTest#network}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Type of the network where the endpoint is located. Possible values: ["GCP_NETWORK", "NON_GCP_NETWORK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#network_type GoogleNetworkManagementConnectivityTest#network_type}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The IP protocol port of the endpoint. Only applicable when protocol is TCP or UDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#port GoogleNetworkManagementConnectivityTest#port}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Project ID where the endpoint is located.

The project ID can be derived from the URI if you provide a endpoint or
network URI.
The following are two cases where you may need to provide the project ID:

1. Only the IP address is specified, and the IP address is within a Google
   Cloud project.
2. When you are using Shared VPC and the IP address that you provide is
   from the service project. In this case, the network that the IP address
   resides in is defined in the host project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#project_id GoogleNetworkManagementConnectivityTest#project_id}

---

### GoogleNetworkManagementConnectivityTestSourceAppEngineVersion <a name="GoogleNetworkManagementConnectivityTestSourceAppEngineVersion" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSourceAppEngineVersion {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion.property.uri">Uri</a></code> | <code>string</code> | An App Engine service version name. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

An App Engine service version name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#uri GoogleNetworkManagementConnectivityTest#uri}

---

### GoogleNetworkManagementConnectivityTestSourceCloudFunction <a name="GoogleNetworkManagementConnectivityTestSourceCloudFunction" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSourceCloudFunction {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction.property.uri">Uri</a></code> | <code>string</code> | A Cloud Function name. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

A Cloud Function name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#uri GoogleNetworkManagementConnectivityTest#uri}

---

### GoogleNetworkManagementConnectivityTestSourceCloudRunRevision <a name="GoogleNetworkManagementConnectivityTestSourceCloudRunRevision" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSourceCloudRunRevision {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision.property.uri">Uri</a></code> | <code>string</code> | A Cloud Run revision URI. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

A Cloud Run revision URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#uri GoogleNetworkManagementConnectivityTest#uri}

---

### GoogleNetworkManagementConnectivityTestTimeouts <a name="GoogleNetworkManagementConnectivityTestTimeouts" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#create GoogleNetworkManagementConnectivityTest#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#delete GoogleNetworkManagementConnectivityTest#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_network_management_connectivity_test#update GoogleNetworkManagementConnectivityTest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkManagementConnectivityTestDestinationOutputReference <a name="GoogleNetworkManagementConnectivityTestDestinationOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetForwardingRule">ResetForwardingRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetGkeMasterCluster">ResetGkeMasterCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetRedisCluster">ResetRedisCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetRedisInstance">ResetRedisInstance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetCloudSqlInstance"></a>

```csharp
private void ResetCloudSqlInstance()
```

##### `ResetForwardingRule` <a name="ResetForwardingRule" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetForwardingRule"></a>

```csharp
private void ResetForwardingRule()
```

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetFqdn"></a>

```csharp
private void ResetFqdn()
```

##### `ResetGkeMasterCluster` <a name="ResetGkeMasterCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetGkeMasterCluster"></a>

```csharp
private void ResetGkeMasterCluster()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetRedisCluster` <a name="ResetRedisCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetRedisCluster"></a>

```csharp
private void ResetRedisCluster()
```

##### `ResetRedisInstance` <a name="ResetRedisInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.resetRedisInstance"></a>

```csharp
private void ResetRedisInstance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqdnInput">FqdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterClusterInput">GkeMasterClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisClusterInput">RedisClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisInstanceInput">RedisInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisCluster">RedisCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisInstance">RedisInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstanceInput"></a>

```csharp
public string CloudSqlInstanceInput { get; }
```

- *Type:* string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRuleInput"></a>

```csharp
public string ForwardingRuleInput { get; }
```

- *Type:* string

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqdnInput"></a>

```csharp
public string FqdnInput { get; }
```

- *Type:* string

---

##### `GkeMasterClusterInput`<sup>Optional</sup> <a name="GkeMasterClusterInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterClusterInput"></a>

```csharp
public string GkeMasterClusterInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RedisClusterInput`<sup>Optional</sup> <a name="RedisClusterInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisClusterInput"></a>

```csharp
public string RedisClusterInput { get; }
```

- *Type:* string

---

##### `RedisInstanceInput`<sup>Optional</sup> <a name="RedisInstanceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisInstanceInput"></a>

```csharp
public string RedisInstanceInput { get; }
```

- *Type:* string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; }
```

- *Type:* string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `GkeMasterCluster`<sup>Required</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `RedisCluster`<sup>Required</sup> <a name="RedisCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisCluster"></a>

```csharp
public string RedisCluster { get; }
```

- *Type:* string

---

##### `RedisInstance`<sup>Required</sup> <a name="RedisInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.redisInstance"></a>

```csharp
public string RedisInstance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestinationOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkManagementConnectivityTestDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestDestination">GoogleNetworkManagementConnectivityTestDestination</a>

---


### GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference <a name="GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion">GoogleNetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceAppEngineVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion">GoogleNetworkManagementConnectivityTestSourceAppEngineVersion</a>

---


### GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference <a name="GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction">GoogleNetworkManagementConnectivityTestSourceCloudFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudFunction InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction">GoogleNetworkManagementConnectivityTestSourceCloudFunction</a>

---


### GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference <a name="GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision">GoogleNetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudRunRevision InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision">GoogleNetworkManagementConnectivityTestSourceCloudRunRevision</a>

---


### GoogleNetworkManagementConnectivityTestSourceOutputReference <a name="GoogleNetworkManagementConnectivityTestSourceOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion">PutAppEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putCloudFunction">PutCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision">PutCloudRunRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetAppEngineVersion">ResetAppEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetCloudFunction">ResetCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetCloudRunRevision">ResetCloudRunRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetGkeMasterCluster">ResetGkeMasterCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppEngineVersion` <a name="PutAppEngineVersion" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion"></a>

```csharp
private void PutAppEngineVersion(GoogleNetworkManagementConnectivityTestSourceAppEngineVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putAppEngineVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion">GoogleNetworkManagementConnectivityTestSourceAppEngineVersion</a>

---

##### `PutCloudFunction` <a name="PutCloudFunction" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putCloudFunction"></a>

```csharp
private void PutCloudFunction(GoogleNetworkManagementConnectivityTestSourceCloudFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putCloudFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction">GoogleNetworkManagementConnectivityTestSourceCloudFunction</a>

---

##### `PutCloudRunRevision` <a name="PutCloudRunRevision" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision"></a>

```csharp
private void PutCloudRunRevision(GoogleNetworkManagementConnectivityTestSourceCloudRunRevision Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.putCloudRunRevision.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision">GoogleNetworkManagementConnectivityTestSourceCloudRunRevision</a>

---

##### `ResetAppEngineVersion` <a name="ResetAppEngineVersion" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetAppEngineVersion"></a>

```csharp
private void ResetAppEngineVersion()
```

##### `ResetCloudFunction` <a name="ResetCloudFunction" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetCloudFunction"></a>

```csharp
private void ResetCloudFunction()
```

##### `ResetCloudRunRevision` <a name="ResetCloudRunRevision" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetCloudRunRevision"></a>

```csharp
private void ResetCloudRunRevision()
```

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetCloudSqlInstance"></a>

```csharp
private void ResetCloudSqlInstance()
```

##### `ResetGkeMasterCluster` <a name="ResetGkeMasterCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetGkeMasterCluster"></a>

```csharp
private void ResetGkeMasterCluster()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersion">AppEngineVersion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference">GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudFunction">CloudFunction</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference">GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevision">CloudRunRevision</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference">GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersionInput">AppEngineVersionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion">GoogleNetworkManagementConnectivityTestSourceAppEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudFunctionInput">CloudFunctionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction">GoogleNetworkManagementConnectivityTestSourceCloudFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevisionInput">CloudRunRevisionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision">GoogleNetworkManagementConnectivityTestSourceCloudRunRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterClusterInput">GkeMasterClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterCluster">GkeMasterCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppEngineVersion`<sup>Required</sup> <a name="AppEngineVersion" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersion"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference AppEngineVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference">GoogleNetworkManagementConnectivityTestSourceAppEngineVersionOutputReference</a>

---

##### `CloudFunction`<sup>Required</sup> <a name="CloudFunction" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudFunction"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference CloudFunction { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference">GoogleNetworkManagementConnectivityTestSourceCloudFunctionOutputReference</a>

---

##### `CloudRunRevision`<sup>Required</sup> <a name="CloudRunRevision" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevision"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference CloudRunRevision { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference">GoogleNetworkManagementConnectivityTestSourceCloudRunRevisionOutputReference</a>

---

##### `AppEngineVersionInput`<sup>Optional</sup> <a name="AppEngineVersionInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.appEngineVersionInput"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceAppEngineVersion AppEngineVersionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceAppEngineVersion">GoogleNetworkManagementConnectivityTestSourceAppEngineVersion</a>

---

##### `CloudFunctionInput`<sup>Optional</sup> <a name="CloudFunctionInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudFunctionInput"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudFunction CloudFunctionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudFunction">GoogleNetworkManagementConnectivityTestSourceCloudFunction</a>

---

##### `CloudRunRevisionInput`<sup>Optional</sup> <a name="CloudRunRevisionInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudRunRevisionInput"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSourceCloudRunRevision CloudRunRevisionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceCloudRunRevision">GoogleNetworkManagementConnectivityTestSourceCloudRunRevision</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstanceInput"></a>

```csharp
public string CloudSqlInstanceInput { get; }
```

- *Type:* string

---

##### `GkeMasterClusterInput`<sup>Optional</sup> <a name="GkeMasterClusterInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterClusterInput"></a>

```csharp
public string GkeMasterClusterInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.cloudSqlInstance"></a>

```csharp
public string CloudSqlInstance { get; }
```

- *Type:* string

---

##### `GkeMasterCluster`<sup>Required</sup> <a name="GkeMasterCluster" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.gkeMasterCluster"></a>

```csharp
public string GkeMasterCluster { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSourceOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkManagementConnectivityTestSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestSource">GoogleNetworkManagementConnectivityTestSource</a>

---


### GoogleNetworkManagementConnectivityTestTimeoutsOutputReference <a name="GoogleNetworkManagementConnectivityTestTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkManagementConnectivityTestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkManagementConnectivityTest.GoogleNetworkManagementConnectivityTestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



