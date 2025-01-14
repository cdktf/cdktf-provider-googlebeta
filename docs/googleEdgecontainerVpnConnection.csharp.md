# `googleEdgecontainerVpnConnection` Submodule <a name="`googleEdgecontainerVpnConnection` Submodule" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleEdgecontainerVpnConnection <a name="GoogleEdgecontainerVpnConnection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection google_edgecontainer_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnection(Construct Scope, string Id, GoogleEdgecontainerVpnConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig">GoogleEdgecontainerVpnConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig">GoogleEdgecontainerVpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject">PutVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetEnableHighAvailability">ResetEnableHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetNatGatewayIp">ResetNatGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpc">ResetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpcProject">ResetVpcProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleEdgecontainerVpnConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

---

##### `PutVpcProject` <a name="PutVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject"></a>

```csharp
private void PutVpcProject(GoogleEdgecontainerVpnConnectionVpcProject Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.putVpcProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---

##### `ResetEnableHighAvailability` <a name="ResetEnableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetEnableHighAvailability"></a>

```csharp
private void ResetEnableHighAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNatGatewayIp` <a name="ResetNatGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetNatGatewayIp"></a>

```csharp
private void ResetNatGatewayIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetRouter"></a>

```csharp
private void ResetRouter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpc"></a>

```csharp
private void ResetVpc()
```

##### `ResetVpcProject` <a name="ResetVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.resetVpcProject"></a>

```csharp
private void ResetVpcProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleEdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerVpnConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerVpnConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerVpnConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleEdgecontainerVpnConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleEdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleEdgecontainerVpnConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleEdgecontainerVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleEdgecontainerVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList">GoogleEdgecontainerVpnConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference">GoogleEdgecontainerVpnConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference">GoogleEdgecontainerVpnConnectionVpcProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailabilityInput">EnableHighAvailabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIpInput">NatGatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.routerInput">RouterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcInput">VpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProjectInput">VpcProjectInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIp">NatGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.router">Router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpc">Vpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.details"></a>

```csharp
public GoogleEdgecontainerVpnConnectionDetailsList Details { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList">GoogleEdgecontainerVpnConnectionDetailsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeouts"></a>

```csharp
public GoogleEdgecontainerVpnConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference">GoogleEdgecontainerVpnConnectionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VpcProject`<sup>Required</sup> <a name="VpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProject"></a>

```csharp
public GoogleEdgecontainerVpnConnectionVpcProjectOutputReference VpcProject { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference">GoogleEdgecontainerVpnConnectionVpcProjectOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `EnableHighAvailabilityInput`<sup>Optional</sup> <a name="EnableHighAvailabilityInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailabilityInput"></a>

```csharp
public object EnableHighAvailabilityInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatGatewayIpInput`<sup>Optional</sup> <a name="NatGatewayIpInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIpInput"></a>

```csharp
public string NatGatewayIpInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.routerInput"></a>

```csharp
public string RouterInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcInput"></a>

```csharp
public string VpcInput { get; }
```

- *Type:* string

---

##### `VpcProjectInput`<sup>Optional</sup> <a name="VpcProjectInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpcProjectInput"></a>

```csharp
public GoogleEdgecontainerVpnConnectionVpcProject VpcProjectInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `EnableHighAvailability`<sup>Required</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.enableHighAvailability"></a>

```csharp
public object EnableHighAvailability { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NatGatewayIp`<sup>Required</sup> <a name="NatGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.natGatewayIp"></a>

```csharp
public string NatGatewayIp { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.router"></a>

```csharp
public string Router { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.vpc"></a>

```csharp
public string Vpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleEdgecontainerVpnConnectionConfig <a name="GoogleEdgecontainerVpnConnectionConfig" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Cluster,
    string Location,
    string Name,
    object EnableHighAvailability = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string NatGatewayIp = null,
    string Project = null,
    string Router = null,
    GoogleEdgecontainerVpnConnectionTimeouts Timeouts = null,
    string Vpc = null,
    GoogleEdgecontainerVpnConnectionVpcProject VpcProject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.cluster">Cluster</a></code> | <code>string</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.location">Location</a></code> | <code>string</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.name">Name</a></code> | <code>string</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>object</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.natGatewayIp">NatGatewayIp</a></code> | <code>string</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.router">Router</a></code> | <code>string</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpc">Vpc</a></code> | <code>string</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#cluster GoogleEdgecontainerVpnConnection#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#location GoogleEdgecontainerVpnConnection#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#name GoogleEdgecontainerVpnConnection#name}

---

##### `EnableHighAvailability`<sup>Optional</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.enableHighAvailability"></a>

```csharp
public object EnableHighAvailability { get; set; }
```

- *Type:* object

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#enable_high_availability GoogleEdgecontainerVpnConnection#enable_high_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#id GoogleEdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#labels GoogleEdgecontainerVpnConnection#labels}

---

##### `NatGatewayIp`<sup>Optional</sup> <a name="NatGatewayIp" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.natGatewayIp"></a>

```csharp
public string NatGatewayIp { get; set; }
```

- *Type:* string

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#nat_gateway_ip GoogleEdgecontainerVpnConnection#nat_gateway_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#project GoogleEdgecontainerVpnConnection#project}.

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.router"></a>

```csharp
public string Router { get; set; }
```

- *Type:* string

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#router GoogleEdgecontainerVpnConnection#router}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.timeouts"></a>

```csharp
public GoogleEdgecontainerVpnConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts">GoogleEdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#timeouts GoogleEdgecontainerVpnConnection#timeouts}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpc"></a>

```csharp
public string Vpc { get; set; }
```

- *Type:* string

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#vpc GoogleEdgecontainerVpnConnection#vpc}

---

##### `VpcProject`<sup>Optional</sup> <a name="VpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionConfig.property.vpcProject"></a>

```csharp
public GoogleEdgecontainerVpnConnectionVpcProject VpcProject { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#vpc_project GoogleEdgecontainerVpnConnection#vpc_project}

---

### GoogleEdgecontainerVpnConnectionDetails <a name="GoogleEdgecontainerVpnConnectionDetails" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetails {

};
```


### GoogleEdgecontainerVpnConnectionDetailsCloudRouter <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsCloudRouter {

};
```


### GoogleEdgecontainerVpnConnectionDetailsCloudVpns <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpns" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsCloudVpns {

};
```


### GoogleEdgecontainerVpnConnectionTimeouts <a name="GoogleEdgecontainerVpnConnectionTimeouts" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#create GoogleEdgecontainerVpnConnection#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#delete GoogleEdgecontainerVpnConnection#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#update GoogleEdgecontainerVpnConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#create GoogleEdgecontainerVpnConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#delete GoogleEdgecontainerVpnConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#update GoogleEdgecontainerVpnConnection#update}.

---

### GoogleEdgecontainerVpnConnectionVpcProject <a name="GoogleEdgecontainerVpnConnectionVpcProject" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionVpcProject {
    string ProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.property.projectId">ProjectId</a></code> | <code>string</code> | The project of the VPC to connect to. If not specified, it is the same as the cluster project. |

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_edgecontainer_vpn_connection#project_id GoogleEdgecontainerVpnConnection#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleEdgecontainerVpnConnectionDetailsCloudRouterList <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouterList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsCloudRouterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get"></a>

```csharp
private GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter">GoogleEdgecontainerVpnConnectionDetailsCloudRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerVpnConnectionDetailsCloudRouter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouter">GoogleEdgecontainerVpnConnectionDetailsCloudRouter</a>

---


### GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get"></a>

```csharp
private GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns">GoogleEdgecontainerVpnConnectionDetailsCloudVpns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerVpnConnectionDetailsCloudVpns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpns">GoogleEdgecontainerVpnConnectionDetailsCloudVpns</a>

---


### GoogleEdgecontainerVpnConnectionDetailsList <a name="GoogleEdgecontainerVpnConnectionDetailsList" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get"></a>

```csharp
private GoogleEdgecontainerVpnConnectionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleEdgecontainerVpnConnectionDetailsOutputReference <a name="GoogleEdgecontainerVpnConnectionDetailsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter">CloudRouter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList">GoogleEdgecontainerVpnConnectionDetailsCloudRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns">CloudVpns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList">GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.error">Error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails">GoogleEdgecontainerVpnConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudRouter`<sup>Required</sup> <a name="CloudRouter" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter"></a>

```csharp
public GoogleEdgecontainerVpnConnectionDetailsCloudRouterList CloudRouter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudRouterList">GoogleEdgecontainerVpnConnectionDetailsCloudRouterList</a>

---

##### `CloudVpns`<sup>Required</sup> <a name="CloudVpns" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns"></a>

```csharp
public GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList CloudVpns { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList">GoogleEdgecontainerVpnConnectionDetailsCloudVpnsList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.error"></a>

```csharp
public string Error { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetailsOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerVpnConnectionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionDetails">GoogleEdgecontainerVpnConnectionDetails</a>

---


### GoogleEdgecontainerVpnConnectionTimeoutsOutputReference <a name="GoogleEdgecontainerVpnConnectionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleEdgecontainerVpnConnectionVpcProjectOutputReference <a name="GoogleEdgecontainerVpnConnectionVpcProjectOutputReference" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleEdgecontainerVpnConnectionVpcProjectOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId"></a>

```csharp
private void ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue"></a>

```csharp
public GoogleEdgecontainerVpnConnectionVpcProject InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleEdgecontainerVpnConnection.GoogleEdgecontainerVpnConnectionVpcProject">GoogleEdgecontainerVpnConnectionVpcProject</a>

---



