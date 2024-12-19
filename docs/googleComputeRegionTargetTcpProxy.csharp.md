# `googleComputeRegionTargetTcpProxy` Submodule <a name="`googleComputeRegionTargetTcpProxy` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionTargetTcpProxy <a name="GoogleComputeRegionTargetTcpProxy" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy google_compute_region_target_tcp_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionTargetTcpProxy(Construct Scope, string Id, GoogleComputeRegionTargetTcpProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig">GoogleComputeRegionTargetTcpProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig">GoogleComputeRegionTargetTcpProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetProxyBind">ResetProxyBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetProxyHeader">ResetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeRegionTargetTcpProxyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts">GoogleComputeRegionTargetTcpProxyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProxyBind` <a name="ResetProxyBind" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetProxyBind"></a>

```csharp
private void ResetProxyBind()
```

##### `ResetProxyHeader` <a name="ResetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetProxyHeader"></a>

```csharp
private void ResetProxyHeader()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionTargetTcpProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionTargetTcpProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionTargetTcpProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionTargetTcpProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeRegionTargetTcpProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeRegionTargetTcpProxy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionTargetTcpProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionTargetTcpProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionTargetTcpProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyId">ProxyId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference">GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.backendServiceInput">BackendServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyBindInput">ProxyBindInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyHeaderInput">ProxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.backendService">BackendService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyBind">ProxyBind</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ProxyId`<sup>Required</sup> <a name="ProxyId" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyId"></a>

```csharp
public double ProxyId { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.timeouts"></a>

```csharp
public GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference">GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference</a>

---

##### `BackendServiceInput`<sup>Optional</sup> <a name="BackendServiceInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.backendServiceInput"></a>

```csharp
public string BackendServiceInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProxyBindInput`<sup>Optional</sup> <a name="ProxyBindInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyBindInput"></a>

```csharp
public object ProxyBindInput { get; }
```

- *Type:* object

---

##### `ProxyHeaderInput`<sup>Optional</sup> <a name="ProxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyHeaderInput"></a>

```csharp
public string ProxyHeaderInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.backendService"></a>

```csharp
public string BackendService { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProxyBind`<sup>Required</sup> <a name="ProxyBind" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyBind"></a>

```csharp
public object ProxyBind { get; }
```

- *Type:* object

---

##### `ProxyHeader`<sup>Required</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionTargetTcpProxyConfig <a name="GoogleComputeRegionTargetTcpProxyConfig" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionTargetTcpProxyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackendService,
    string Name,
    string Description = null,
    string Id = null,
    string Project = null,
    object ProxyBind = null,
    string ProxyHeader = null,
    string Region = null,
    GoogleComputeRegionTargetTcpProxyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.backendService">BackendService</a></code> | <code>string</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#id GoogleComputeRegionTargetTcpProxy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#project GoogleComputeRegionTargetTcpProxy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.proxyBind">ProxyBind</a></code> | <code>object</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.proxyHeader">ProxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.region">Region</a></code> | <code>string</code> | The Region in which the created target TCP proxy should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts">GoogleComputeRegionTargetTcpProxyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackendService`<sup>Required</sup> <a name="BackendService" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.backendService"></a>

```csharp
public string BackendService { get; set; }
```

- *Type:* string

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#backend_service GoogleComputeRegionTargetTcpProxy#backend_service}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#name GoogleComputeRegionTargetTcpProxy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#description GoogleComputeRegionTargetTcpProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#id GoogleComputeRegionTargetTcpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#project GoogleComputeRegionTargetTcpProxy#project}.

---

##### `ProxyBind`<sup>Optional</sup> <a name="ProxyBind" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.proxyBind"></a>

```csharp
public object ProxyBind { get; set; }
```

- *Type:* object

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#proxy_bind GoogleComputeRegionTargetTcpProxy#proxy_bind}

---

##### `ProxyHeader`<sup>Optional</sup> <a name="ProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.proxyHeader"></a>

```csharp
public string ProxyHeader { get; set; }
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#proxy_header GoogleComputeRegionTargetTcpProxy#proxy_header}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Region in which the created target TCP proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#region GoogleComputeRegionTargetTcpProxy#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyConfig.property.timeouts"></a>

```csharp
public GoogleComputeRegionTargetTcpProxyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts">GoogleComputeRegionTargetTcpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#timeouts GoogleComputeRegionTargetTcpProxy#timeouts}

---

### GoogleComputeRegionTargetTcpProxyTimeouts <a name="GoogleComputeRegionTargetTcpProxyTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionTargetTcpProxyTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#create GoogleComputeRegionTargetTcpProxy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#delete GoogleComputeRegionTargetTcpProxy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#create GoogleComputeRegionTargetTcpProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_target_tcp_proxy#delete GoogleComputeRegionTargetTcpProxy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference <a name="GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionTargetTcpProxy.GoogleComputeRegionTargetTcpProxyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



