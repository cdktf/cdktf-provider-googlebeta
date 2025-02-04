# `googleNetworkSecurityFirewallEndpointAssociation` Submodule <a name="`googleNetworkSecurityFirewallEndpointAssociation` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityFirewallEndpointAssociation <a name="GoogleNetworkSecurityFirewallEndpointAssociation" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association google_network_security_firewall_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityFirewallEndpointAssociation(Construct Scope, string Id, GoogleNetworkSecurityFirewallEndpointAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig">GoogleNetworkSecurityFirewallEndpointAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig">GoogleNetworkSecurityFirewallEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy">ResetTlsInspectionPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityFirewallEndpointAssociationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTlsInspectionPolicy` <a name="ResetTlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.resetTlsInspectionPolicy"></a>

```csharp
private void ResetTlsInspectionPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityFirewallEndpointAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityFirewallEndpointAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityFirewallEndpointAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityFirewallEndpointAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkSecurityFirewallEndpointAssociation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityFirewallEndpointAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityFirewallEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityFirewallEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput">FirewallEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput">TlsInspectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint">FirewallEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy">TlsInspectionPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference">GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `FirewallEndpointInput`<sup>Optional</sup> <a name="FirewallEndpointInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpointInput"></a>

```csharp
public string FirewallEndpointInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsInspectionPolicyInput`<sup>Optional</sup> <a name="TlsInspectionPolicyInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicyInput"></a>

```csharp
public string TlsInspectionPolicyInput { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `FirewallEndpoint`<sup>Required</sup> <a name="FirewallEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.firewallEndpoint"></a>

```csharp
public string FirewallEndpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `TlsInspectionPolicy`<sup>Required</sup> <a name="TlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tlsInspectionPolicy"></a>

```csharp
public string TlsInspectionPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityFirewallEndpointAssociationConfig <a name="GoogleNetworkSecurityFirewallEndpointAssociationConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityFirewallEndpointAssociationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FirewallEndpoint,
    string Location,
    string Name,
    string Network,
    object Disabled = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Parent = null,
    GoogleNetworkSecurityFirewallEndpointAssociationTimeouts Timeouts = null,
    string TlsInspectionPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint">FirewallEndpoint</a></code> | <code>string</code> | The URL of the firewall endpoint that is being associated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.location">Location</a></code> | <code>string</code> | The location (zone) of the firewall endpoint association. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.name">Name</a></code> | <code>string</code> | The name of the firewall endpoint association resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.network">Network</a></code> | <code>string</code> | The URL of the network that is being associated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.disabled">Disabled</a></code> | <code>object</code> | Whether the association is disabled. True indicates that traffic will not be intercepted. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#id GoogleNetworkSecurityFirewallEndpointAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of key/value label pairs to assign to the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.parent">Parent</a></code> | <code>string</code> | The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy">TlsInspectionPolicy</a></code> | <code>string</code> | The URL of the TlsInspectionPolicy that is being associated. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FirewallEndpoint`<sup>Required</sup> <a name="FirewallEndpoint" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.firewallEndpoint"></a>

```csharp
public string FirewallEndpoint { get; set; }
```

- *Type:* string

The URL of the firewall endpoint that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#firewall_endpoint GoogleNetworkSecurityFirewallEndpointAssociation#firewall_endpoint}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location (zone) of the firewall endpoint association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#location GoogleNetworkSecurityFirewallEndpointAssociation#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the firewall endpoint association resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#name GoogleNetworkSecurityFirewallEndpointAssociation#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The URL of the network that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#network GoogleNetworkSecurityFirewallEndpointAssociation#network}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Whether the association is disabled. True indicates that traffic will not be intercepted.

~> **Note:** The API will reject the request if this value is set to true when creating the resource,
otherwise on an update the association can be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#disabled GoogleNetworkSecurityFirewallEndpointAssociation#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#id GoogleNetworkSecurityFirewallEndpointAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of key/value label pairs to assign to the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#labels GoogleNetworkSecurityFirewallEndpointAssociation#labels}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The name of the parent this firewall endpoint association belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#parent GoogleNetworkSecurityFirewallEndpointAssociation#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityFirewallEndpointAssociationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts">GoogleNetworkSecurityFirewallEndpointAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#timeouts GoogleNetworkSecurityFirewallEndpointAssociation#timeouts}

---

##### `TlsInspectionPolicy`<sup>Optional</sup> <a name="TlsInspectionPolicy" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationConfig.property.tlsInspectionPolicy"></a>

```csharp
public string TlsInspectionPolicy { get; set; }
```

- *Type:* string

The URL of the TlsInspectionPolicy that is being associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#tls_inspection_policy GoogleNetworkSecurityFirewallEndpointAssociation#tls_inspection_policy}

---

### GoogleNetworkSecurityFirewallEndpointAssociationTimeouts <a name="GoogleNetworkSecurityFirewallEndpointAssociationTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityFirewallEndpointAssociationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#create GoogleNetworkSecurityFirewallEndpointAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#delete GoogleNetworkSecurityFirewallEndpointAssociation#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#update GoogleNetworkSecurityFirewallEndpointAssociation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#create GoogleNetworkSecurityFirewallEndpointAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#delete GoogleNetworkSecurityFirewallEndpointAssociation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_network_security_firewall_endpoint_association#update GoogleNetworkSecurityFirewallEndpointAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference <a name="GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityFirewallEndpointAssociation.GoogleNetworkSecurityFirewallEndpointAssociationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



