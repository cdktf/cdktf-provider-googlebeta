# `googleVmwareengineNetworkPeering` Submodule <a name="`googleVmwareengineNetworkPeering` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineNetworkPeering <a name="GoogleVmwareengineNetworkPeering" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering google_vmwareengine_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVmwareengineNetworkPeering(Construct Scope, string Id, GoogleVmwareengineNetworkPeeringConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig">GoogleVmwareengineNetworkPeeringConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig">GoogleVmwareengineNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutes">ResetExportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp">ResetExportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutes">ResetImportCustomRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp">ResetImportCustomRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVmwareengineNetworkPeeringTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExportCustomRoutes` <a name="ResetExportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutes"></a>

```csharp
private void ResetExportCustomRoutes()
```

##### `ResetExportCustomRoutesWithPublicIp` <a name="ResetExportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetExportCustomRoutesWithPublicIp"></a>

```csharp
private void ResetExportCustomRoutesWithPublicIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportCustomRoutes` <a name="ResetImportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutes"></a>

```csharp
private void ResetImportCustomRoutes()
```

##### `ResetImportCustomRoutesWithPublicIp` <a name="ResetImportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetImportCustomRoutesWithPublicIp"></a>

```csharp
private void ResetImportCustomRoutesWithPublicIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVmwareengineNetworkPeering.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVmwareengineNetworkPeering.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVmwareengineNetworkPeering.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleVmwareengineNetworkPeering.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleVmwareengineNetworkPeering resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVmwareengineNetworkPeering to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVmwareengineNetworkPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineNetworkPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.stateDetails">StateDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference">GoogleVmwareengineNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical">VmwareEngineNetworkCanonical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesInput">ExportCustomRoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput">ExportCustomRoutesWithPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesInput">ImportCustomRoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput">ImportCustomRoutesWithPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkInput">PeerNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkTypeInput">PeerNetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkInput">VmwareEngineNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp">ExportCustomRoutesWithPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp">ImportCustomRoutesWithPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetwork">PeerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkType">PeerNetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.stateDetails"></a>

```csharp
public string StateDetails { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeouts"></a>

```csharp
public GoogleVmwareengineNetworkPeeringTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference">GoogleVmwareengineNetworkPeeringTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VmwareEngineNetworkCanonical`<sup>Required</sup> <a name="VmwareEngineNetworkCanonical" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkCanonical"></a>

```csharp
public string VmwareEngineNetworkCanonical { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExportCustomRoutesInput`<sup>Optional</sup> <a name="ExportCustomRoutesInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesInput"></a>

```csharp
public object ExportCustomRoutesInput { get; }
```

- *Type:* object

---

##### `ExportCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ExportCustomRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIpInput"></a>

```csharp
public object ExportCustomRoutesWithPublicIpInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportCustomRoutesInput`<sup>Optional</sup> <a name="ImportCustomRoutesInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesInput"></a>

```csharp
public object ImportCustomRoutesInput { get; }
```

- *Type:* object

---

##### `ImportCustomRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ImportCustomRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIpInput"></a>

```csharp
public object ImportCustomRoutesWithPublicIpInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PeerNetworkInput`<sup>Optional</sup> <a name="PeerNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkInput"></a>

```csharp
public string PeerNetworkInput { get; }
```

- *Type:* string

---

##### `PeerNetworkTypeInput`<sup>Optional</sup> <a name="PeerNetworkTypeInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkTypeInput"></a>

```csharp
public string PeerNetworkTypeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmwareEngineNetworkInput`<sup>Optional</sup> <a name="VmwareEngineNetworkInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetworkInput"></a>

```csharp
public string VmwareEngineNetworkInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutes"></a>

```csharp
public object ExportCustomRoutes { get; }
```

- *Type:* object

---

##### `ExportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="ExportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.exportCustomRoutesWithPublicIp"></a>

```csharp
public object ExportCustomRoutesWithPublicIp { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutes"></a>

```csharp
public object ImportCustomRoutes { get; }
```

- *Type:* object

---

##### `ImportCustomRoutesWithPublicIp`<sup>Required</sup> <a name="ImportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.importCustomRoutesWithPublicIp"></a>

```csharp
public object ImportCustomRoutesWithPublicIp { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetwork"></a>

```csharp
public string PeerNetwork { get; }
```

- *Type:* string

---

##### `PeerNetworkType`<sup>Required</sup> <a name="PeerNetworkType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.peerNetworkType"></a>

```csharp
public string PeerNetworkType { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.vmwareEngineNetwork"></a>

```csharp
public string VmwareEngineNetwork { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeering.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineNetworkPeeringConfig <a name="GoogleVmwareengineNetworkPeeringConfig" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVmwareengineNetworkPeeringConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PeerNetwork,
    string PeerNetworkType,
    string VmwareEngineNetwork,
    string Description = null,
    object ExportCustomRoutes = null,
    object ExportCustomRoutesWithPublicIp = null,
    string Id = null,
    object ImportCustomRoutes = null,
    object ImportCustomRoutesWithPublicIp = null,
    string Project = null,
    GoogleVmwareengineNetworkPeeringTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.name">Name</a></code> | <code>string</code> | The ID of the Network Peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetwork">PeerNetwork</a></code> | <code>string</code> | The relative resource name of the network to peer with a standard VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetworkType">PeerNetworkType</a></code> | <code>string</code> | The type of the network to peer with the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork">VmwareEngineNetwork</a></code> | <code>string</code> | The relative resource name of the VMware Engine network. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.description">Description</a></code> | <code>string</code> | User-provided description for this network peering. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>object</code> | True if custom routes are exported to the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp">ExportCustomRoutesWithPublicIp</a></code> | <code>object</code> | True if all subnet routes with a public IP address range are exported; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>object</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp">ImportCustomRoutesWithPublicIp</a></code> | <code>object</code> | True if custom routes are imported from the peered network; false otherwise. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the Network Peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#name GoogleVmwareengineNetworkPeering#name}

---

##### `PeerNetwork`<sup>Required</sup> <a name="PeerNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetwork"></a>

```csharp
public string PeerNetwork { get; set; }
```

- *Type:* string

The relative resource name of the network to peer with a standard VMware Engine network.

The provided network can be a consumer VPC network or another standard VMware Engine network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#peer_network GoogleVmwareengineNetworkPeering#peer_network}

---

##### `PeerNetworkType`<sup>Required</sup> <a name="PeerNetworkType" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.peerNetworkType"></a>

```csharp
public string PeerNetworkType { get; set; }
```

- *Type:* string

The type of the network to peer with the VMware Engine network.

Possible values: ["STANDARD", "VMWARE_ENGINE_NETWORK", "PRIVATE_SERVICES_ACCESS", "NETAPP_CLOUD_VOLUMES", "THIRD_PARTY_SERVICE", "DELL_POWERSCALE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#peer_network_type GoogleVmwareengineNetworkPeering#peer_network_type}

---

##### `VmwareEngineNetwork`<sup>Required</sup> <a name="VmwareEngineNetwork" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.vmwareEngineNetwork"></a>

```csharp
public string VmwareEngineNetwork { get; set; }
```

- *Type:* string

The relative resource name of the VMware Engine network.

Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#vmware_engine_network GoogleVmwareengineNetworkPeering#vmware_engine_network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description for this network peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#description GoogleVmwareengineNetworkPeering#description}

---

##### `ExportCustomRoutes`<sup>Optional</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutes"></a>

```csharp
public object ExportCustomRoutes { get; set; }
```

- *Type:* object

True if custom routes are exported to the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#export_custom_routes GoogleVmwareengineNetworkPeering#export_custom_routes}

---

##### `ExportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="ExportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.exportCustomRoutesWithPublicIp"></a>

```csharp
public object ExportCustomRoutesWithPublicIp { get; set; }
```

- *Type:* object

True if all subnet routes with a public IP address range are exported; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#export_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#export_custom_routes_with_public_ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#id GoogleVmwareengineNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportCustomRoutes`<sup>Optional</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutes"></a>

```csharp
public object ImportCustomRoutes { get; set; }
```

- *Type:* object

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#import_custom_routes GoogleVmwareengineNetworkPeering#import_custom_routes}

---

##### `ImportCustomRoutesWithPublicIp`<sup>Optional</sup> <a name="ImportCustomRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.importCustomRoutesWithPublicIp"></a>

```csharp
public object ImportCustomRoutesWithPublicIp { get; set; }
```

- *Type:* object

True if custom routes are imported from the peered network; false otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#import_custom_routes_with_public_ip GoogleVmwareengineNetworkPeering#import_custom_routes_with_public_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#project GoogleVmwareengineNetworkPeering#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringConfig.property.timeouts"></a>

```csharp
public GoogleVmwareengineNetworkPeeringTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts">GoogleVmwareengineNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#timeouts GoogleVmwareengineNetworkPeering#timeouts}

---

### GoogleVmwareengineNetworkPeeringTimeouts <a name="GoogleVmwareengineNetworkPeeringTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVmwareengineNetworkPeeringTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#create GoogleVmwareengineNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#delete GoogleVmwareengineNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#update GoogleVmwareengineNetworkPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#create GoogleVmwareengineNetworkPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#delete GoogleVmwareengineNetworkPeering#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vmwareengine_network_peering#update GoogleVmwareengineNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineNetworkPeeringTimeoutsOutputReference <a name="GoogleVmwareengineNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleVmwareengineNetworkPeeringTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleVmwareengineNetworkPeering.GoogleVmwareengineNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



