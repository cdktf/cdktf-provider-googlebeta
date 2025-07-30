# `googleComputeNetworkPeeringRoutesConfig` Submodule <a name="`googleComputeNetworkPeeringRoutesConfig` Submodule" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetworkPeeringRoutesConfig <a name="GoogleComputeNetworkPeeringRoutesConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config google_compute_network_peering_routes_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkPeeringRoutesConfig(Construct Scope, string Id, GoogleComputeNetworkPeeringRoutesConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig">GoogleComputeNetworkPeeringRoutesConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig">GoogleComputeNetworkPeeringRoutesConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetExportSubnetRoutesWithPublicIp">ResetExportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetImportSubnetRoutesWithPublicIp">ResetImportSubnetRoutesWithPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeNetworkPeeringRoutesConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

---

##### `ResetExportSubnetRoutesWithPublicIp` <a name="ResetExportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetExportSubnetRoutesWithPublicIp"></a>

```csharp
private void ResetExportSubnetRoutesWithPublicIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImportSubnetRoutesWithPublicIp` <a name="ResetImportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetImportSubnetRoutesWithPublicIp"></a>

```csharp
private void ResetImportSubnetRoutesWithPublicIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkPeeringRoutesConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkPeeringRoutesConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkPeeringRoutesConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeNetworkPeeringRoutesConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetworkPeeringRoutesConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetworkPeeringRoutesConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetworkPeeringRoutesConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput">ExportCustomRoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIpInput">ExportSubnetRoutesWithPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput">ImportCustomRoutesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIpInput">ImportSubnetRoutesWithPublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput">PeeringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIp">ExportSubnetRoutesWithPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIp">ImportSubnetRoutesWithPublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering">Peering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeouts"></a>

```csharp
public GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference">GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference</a>

---

##### `ExportCustomRoutesInput`<sup>Optional</sup> <a name="ExportCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutesInput"></a>

```csharp
public object ExportCustomRoutesInput { get; }
```

- *Type:* object

---

##### `ExportSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ExportSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIpInput"></a>

```csharp
public object ExportSubnetRoutesWithPublicIpInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImportCustomRoutesInput`<sup>Optional</sup> <a name="ImportCustomRoutesInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutesInput"></a>

```csharp
public object ImportCustomRoutesInput { get; }
```

- *Type:* object

---

##### `ImportSubnetRoutesWithPublicIpInput`<sup>Optional</sup> <a name="ImportSubnetRoutesWithPublicIpInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIpInput"></a>

```csharp
public object ImportSubnetRoutesWithPublicIpInput { get; }
```

- *Type:* object

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PeeringInput`<sup>Optional</sup> <a name="PeeringInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peeringInput"></a>

```csharp
public string PeeringInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportCustomRoutes"></a>

```csharp
public object ExportCustomRoutes { get; }
```

- *Type:* object

---

##### `ExportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="ExportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.exportSubnetRoutesWithPublicIp"></a>

```csharp
public object ExportSubnetRoutesWithPublicIp { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importCustomRoutes"></a>

```csharp
public object ImportCustomRoutes { get; }
```

- *Type:* object

---

##### `ImportSubnetRoutesWithPublicIp`<sup>Required</sup> <a name="ImportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.importSubnetRoutesWithPublicIp"></a>

```csharp
public object ImportSubnetRoutesWithPublicIp { get; }
```

- *Type:* object

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.peering"></a>

```csharp
public string Peering { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkPeeringRoutesConfigConfig <a name="GoogleComputeNetworkPeeringRoutesConfigConfig" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkPeeringRoutesConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ExportCustomRoutes,
    object ImportCustomRoutes,
    string Network,
    string Peering,
    object ExportSubnetRoutesWithPublicIp = null,
    string Id = null,
    object ImportSubnetRoutesWithPublicIp = null,
    string Project = null,
    GoogleComputeNetworkPeeringRoutesConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes">ExportCustomRoutes</a></code> | <code>object</code> | Whether to export the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes">ImportCustomRoutes</a></code> | <code>object</code> | Whether to import the custom routes to the peer network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network">Network</a></code> | <code>string</code> | The name of the primary network for the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering">Peering</a></code> | <code>string</code> | Name of the peering. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportSubnetRoutesWithPublicIp">ExportSubnetRoutesWithPublicIp</a></code> | <code>object</code> | Whether subnet routes with public IP range are exported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importSubnetRoutesWithPublicIp">ImportSubnetRoutesWithPublicIp</a></code> | <code>object</code> | Whether subnet routes with public IP range are imported. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExportCustomRoutes`<sup>Required</sup> <a name="ExportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportCustomRoutes"></a>

```csharp
public object ExportCustomRoutes { get; set; }
```

- *Type:* object

Whether to export the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#export_custom_routes GoogleComputeNetworkPeeringRoutesConfig#export_custom_routes}

---

##### `ImportCustomRoutes`<sup>Required</sup> <a name="ImportCustomRoutes" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importCustomRoutes"></a>

```csharp
public object ImportCustomRoutes { get; set; }
```

- *Type:* object

Whether to import the custom routes to the peer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#import_custom_routes GoogleComputeNetworkPeeringRoutesConfig#import_custom_routes}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the primary network for the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#network GoogleComputeNetworkPeeringRoutesConfig#network}

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.peering"></a>

```csharp
public string Peering { get; set; }
```

- *Type:* string

Name of the peering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#peering GoogleComputeNetworkPeeringRoutesConfig#peering}

---

##### `ExportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="ExportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.exportSubnetRoutesWithPublicIp"></a>

```csharp
public object ExportSubnetRoutesWithPublicIp { get; set; }
```

- *Type:* object

Whether subnet routes with public IP range are exported.

IPv4 special-use ranges are always exported to peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#export_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#export_subnet_routes_with_public_ip}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#id GoogleComputeNetworkPeeringRoutesConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportSubnetRoutesWithPublicIp`<sup>Optional</sup> <a name="ImportSubnetRoutesWithPublicIp" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.importSubnetRoutesWithPublicIp"></a>

```csharp
public object ImportSubnetRoutesWithPublicIp { get; set; }
```

- *Type:* object

Whether subnet routes with public IP range are imported.

IPv4 special-use ranges are always imported from peers and
are not controlled by this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#import_subnet_routes_with_public_ip GoogleComputeNetworkPeeringRoutesConfig#import_subnet_routes_with_public_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#project GoogleComputeNetworkPeeringRoutesConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigConfig.property.timeouts"></a>

```csharp
public GoogleComputeNetworkPeeringRoutesConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts">GoogleComputeNetworkPeeringRoutesConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#timeouts GoogleComputeNetworkPeeringRoutesConfig#timeouts}

---

### GoogleComputeNetworkPeeringRoutesConfigTimeouts <a name="GoogleComputeNetworkPeeringRoutesConfigTimeouts" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkPeeringRoutesConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#create GoogleComputeNetworkPeeringRoutesConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#delete GoogleComputeNetworkPeeringRoutesConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_compute_network_peering_routes_config#update GoogleComputeNetworkPeeringRoutesConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference <a name="GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNetworkPeeringRoutesConfig.GoogleComputeNetworkPeeringRoutesConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



