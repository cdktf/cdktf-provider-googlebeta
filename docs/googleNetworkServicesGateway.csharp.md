# `googleNetworkServicesGateway` Submodule <a name="`googleNetworkServicesGateway` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesGateway <a name="GoogleNetworkServicesGateway" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesGateway(Construct Scope, string Id, GoogleNetworkServicesGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig">GoogleNetworkServicesGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig">GoogleNetworkServicesGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetAddresses">ResetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetCertificateUrls">ResetCertificateUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy">ResetDeleteSwgAutogenRouterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetGatewaySecurityPolicy">ResetGatewaySecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetRoutingMode">ResetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetServerTlsPolicy">ResetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkServicesGatewayTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>

---

##### `ResetAddresses` <a name="ResetAddresses" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetAddresses"></a>

```csharp
private void ResetAddresses()
```

##### `ResetCertificateUrls` <a name="ResetCertificateUrls" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetCertificateUrls"></a>

```csharp
private void ResetCertificateUrls()
```

##### `ResetDeleteSwgAutogenRouterOnDestroy` <a name="ResetDeleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy"></a>

```csharp
private void ResetDeleteSwgAutogenRouterOnDestroy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGatewaySecurityPolicy` <a name="ResetGatewaySecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetGatewaySecurityPolicy"></a>

```csharp
private void ResetGatewaySecurityPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRoutingMode` <a name="ResetRoutingMode" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetRoutingMode"></a>

```csharp
private void ResetRoutingMode()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetServerTlsPolicy` <a name="ResetServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetServerTlsPolicy"></a>

```csharp
private void ResetServerTlsPolicy()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesGateway resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkServicesGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkServicesGateway resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference">GoogleNetworkServicesGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addressesInput">AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrlsInput">CertificateUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput">DeleteSwgAutogenRouterOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicyInput">GatewaySecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.portsInput">PortsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingModeInput">RoutingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicyInput">ServerTlsPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrls">CertificateUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">DeleteSwgAutogenRouterOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicy">GatewaySecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingMode">RoutingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeouts"></a>

```csharp
public GoogleNetworkServicesGatewayTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference">GoogleNetworkServicesGatewayTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AddressesInput`<sup>Optional</sup> <a name="AddressesInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addressesInput"></a>

```csharp
public string[] AddressesInput { get; }
```

- *Type:* string[]

---

##### `CertificateUrlsInput`<sup>Optional</sup> <a name="CertificateUrlsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrlsInput"></a>

```csharp
public string[] CertificateUrlsInput { get; }
```

- *Type:* string[]

---

##### `DeleteSwgAutogenRouterOnDestroyInput`<sup>Optional</sup> <a name="DeleteSwgAutogenRouterOnDestroyInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput"></a>

```csharp
public object DeleteSwgAutogenRouterOnDestroyInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GatewaySecurityPolicyInput`<sup>Optional</sup> <a name="GatewaySecurityPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicyInput"></a>

```csharp
public string GatewaySecurityPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.portsInput"></a>

```csharp
public double[] PortsInput { get; }
```

- *Type:* double[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoutingModeInput`<sup>Optional</sup> <a name="RoutingModeInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingModeInput"></a>

```csharp
public string RoutingModeInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServerTlsPolicyInput`<sup>Optional</sup> <a name="ServerTlsPolicyInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicyInput"></a>

```csharp
public string ServerTlsPolicyInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `CertificateUrls`<sup>Required</sup> <a name="CertificateUrls" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.certificateUrls"></a>

```csharp
public string[] CertificateUrls { get; }
```

- *Type:* string[]

---

##### `DeleteSwgAutogenRouterOnDestroy`<sup>Required</sup> <a name="DeleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```csharp
public object DeleteSwgAutogenRouterOnDestroy { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GatewaySecurityPolicy`<sup>Required</sup> <a name="GatewaySecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```csharp
public string GatewaySecurityPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.routingMode"></a>

```csharp
public string RoutingMode { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `ServerTlsPolicy`<sup>Required</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesGatewayConfig <a name="GoogleNetworkServicesGatewayConfig" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesGatewayConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double[] Ports,
    string Type,
    string[] Addresses = null,
    string[] CertificateUrls = null,
    object DeleteSwgAutogenRouterOnDestroy = null,
    string Description = null,
    string GatewaySecurityPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Network = null,
    string Project = null,
    string RoutingMode = null,
    string Scope = null,
    string ServerTlsPolicy = null,
    string Subnetwork = null,
    GoogleNetworkServicesGatewayTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.name">Name</a></code> | <code>string</code> | Short name of the Gateway resource to be created. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.ports">Ports</a></code> | <code>double[]</code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.type">Type</a></code> | <code>string</code> | Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.addresses">Addresses</a></code> | <code>string[]</code> | Zero or one IPv4-address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.certificateUrls">CertificateUrls</a></code> | <code>string[]</code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy">DeleteSwgAutogenRouterOnDestroy</a></code> | <code>object</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.description">Description</a></code> | <code>string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.gatewaySecurityPolicy">GatewaySecurityPolicy</a></code> | <code>string</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#id GoogleNetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.location">Location</a></code> | <code>string</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.network">Network</a></code> | <code>string</code> | The relative resource name identifying the VPC network that is using this configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#project GoogleNetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.routingMode">RoutingMode</a></code> | <code>string</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.scope">Scope</a></code> | <code>string</code> | Immutable. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.serverTlsPolicy">ServerTlsPolicy</a></code> | <code>string</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Short name of the Gateway resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#name GoogleNetworkServicesGateway#name}

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.ports"></a>

```csharp
public double[] Ports { get; set; }
```

- *Type:* double[]

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are
limited to 1 port. Gateways of type 'OPEN_MESH' listen on 0.0.0.0 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#ports GoogleNetworkServicesGateway#ports}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Immutable. The type of the customer-managed gateway. Possible values are: * OPEN_MESH * SECURE_WEB_GATEWAY. Possible values: ["TYPE_UNSPECIFIED", "OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#type GoogleNetworkServicesGateway#type}

---

##### `Addresses`<sup>Optional</sup> <a name="Addresses" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.addresses"></a>

```csharp
public string[] Addresses { get; set; }
```

- *Type:* string[]

Zero or one IPv4-address on which the Gateway will receive the traffic.

When no address is provided,
an IP from the subnetwork is allocated This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#addresses GoogleNetworkServicesGateway#addresses}

---

##### `CertificateUrls`<sup>Optional</sup> <a name="CertificateUrls" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.certificateUrls"></a>

```csharp
public string[] CertificateUrls { get; set; }
```

- *Type:* string[]

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#certificate_urls GoogleNetworkServicesGateway#certificate_urls}

---

##### `DeleteSwgAutogenRouterOnDestroy`<sup>Optional</sup> <a name="DeleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy"></a>

```csharp
public object DeleteSwgAutogenRouterOnDestroy { get; set; }
```

- *Type:* object

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#delete_swg_autogen_router_on_destroy GoogleNetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#description GoogleNetworkServicesGateway#description}

---

##### `GatewaySecurityPolicy`<sup>Optional</sup> <a name="GatewaySecurityPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.gatewaySecurityPolicy"></a>

```csharp
public string GatewaySecurityPolicy { get; set; }
```

- *Type:* string

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#gateway_security_policy GoogleNetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#id GoogleNetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#labels GoogleNetworkServicesGateway#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#location GoogleNetworkServicesGateway#location}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The relative resource name identifying the VPC network that is using this configuration.

For example: 'projects/* /global/networks/network-1'.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#network GoogleNetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#project GoogleNetworkServicesGateway#project}.

---

##### `RoutingMode`<sup>Optional</sup> <a name="RoutingMode" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.routingMode"></a>

```csharp
public string RoutingMode { get; set; }
```

- *Type:* string

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#routing_mode GoogleNetworkServicesGateway#routing_mode}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as
a single coniguration to the proxy/load balancer.
Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#scope GoogleNetworkServicesGateway#scope}

---

##### `ServerTlsPolicy`<sup>Optional</sup> <a name="ServerTlsPolicy" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.serverTlsPolicy"></a>

```csharp
public string ServerTlsPolicy { get; set; }
```

- *Type:* string

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#server_tls_policy GoogleNetworkServicesGateway#server_tls_policy}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The relative resource name identifying the subnetwork in which this SWG is allocated.

For example: 'projects/* /regions/us-central1/subnetworks/network-1'.
Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#subnetwork GoogleNetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayConfig.property.timeouts"></a>

```csharp
public GoogleNetworkServicesGatewayTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts">GoogleNetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#timeouts GoogleNetworkServicesGateway#timeouts}

---

### GoogleNetworkServicesGatewayTimeouts <a name="GoogleNetworkServicesGatewayTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesGatewayTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#create GoogleNetworkServicesGateway#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#delete GoogleNetworkServicesGateway#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#update GoogleNetworkServicesGateway#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#create GoogleNetworkServicesGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#delete GoogleNetworkServicesGateway#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_gateway#update GoogleNetworkServicesGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesGatewayTimeoutsOutputReference <a name="GoogleNetworkServicesGatewayTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkServicesGatewayTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkServicesGateway.GoogleNetworkServicesGatewayTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



