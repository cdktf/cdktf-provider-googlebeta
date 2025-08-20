# `googleNetworkSecurityMirroringEndpointGroup` Submodule <a name="`googleNetworkSecurityMirroringEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringEndpointGroup <a name="GoogleNetworkSecurityMirroringEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group google_network_security_mirroring_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroup(Construct Scope, string Id, GoogleNetworkSecurityMirroringEndpointGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig">GoogleNetworkSecurityMirroringEndpointGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig">GoogleNetworkSecurityMirroringEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetworkSecurityMirroringEndpointGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityMirroringEndpointGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityMirroringEndpointGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityMirroringEndpointGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetworkSecurityMirroringEndpointGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetworkSecurityMirroringEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityMirroringEndpointGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityMirroringEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.associations">Associations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connectedDeploymentGroups">ConnectedDeploymentGroups</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput">MirroringDeploymentGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput">MirroringEndpointGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup">MirroringDeploymentGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId">MirroringEndpointGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.associations"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupAssociationsList Associations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList">GoogleNetworkSecurityMirroringEndpointGroupAssociationsList</a>

---

##### `ConnectedDeploymentGroups`<sup>Required</sup> <a name="ConnectedDeploymentGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.connectedDeploymentGroups"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList ConnectedDeploymentGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MirroringDeploymentGroupInput`<sup>Optional</sup> <a name="MirroringDeploymentGroupInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroupInput"></a>

```csharp
public string MirroringDeploymentGroupInput { get; }
```

- *Type:* string

---

##### `MirroringEndpointGroupIdInput`<sup>Optional</sup> <a name="MirroringEndpointGroupIdInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupIdInput"></a>

```csharp
public string MirroringEndpointGroupIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MirroringDeploymentGroup`<sup>Required</sup> <a name="MirroringDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringDeploymentGroup"></a>

```csharp
public string MirroringDeploymentGroup { get; }
```

- *Type:* string

---

##### `MirroringEndpointGroupId`<sup>Required</sup> <a name="MirroringEndpointGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.mirroringEndpointGroupId"></a>

```csharp
public string MirroringEndpointGroupId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociations <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociations" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupAssociations {

};
```


### GoogleNetworkSecurityMirroringEndpointGroupConfig <a name="GoogleNetworkSecurityMirroringEndpointGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string MirroringDeploymentGroup,
    string MirroringEndpointGroupId,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetworkSecurityMirroringEndpointGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.location">Location</a></code> | <code>string</code> | The cloud location of the endpoint group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup">MirroringDeploymentGroup</a></code> | <code>string</code> | The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId">MirroringEndpointGroupId</a></code> | <code>string</code> | The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.description">Description</a></code> | <code>string</code> | User-provided description of the endpoint group. Used as additional context for the endpoint group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The cloud location of the endpoint group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#location GoogleNetworkSecurityMirroringEndpointGroup#location}

---

##### `MirroringDeploymentGroup`<sup>Required</sup> <a name="MirroringDeploymentGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringDeploymentGroup"></a>

```csharp
public string MirroringDeploymentGroup { get; set; }
```

- *Type:* string

The deployment group that this DIRECT endpoint group is connected to, for example: 'projects/123456789/locations/global/mirroringDeploymentGroups/my-dg'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_deployment_group GoogleNetworkSecurityMirroringEndpointGroup#mirroring_deployment_group}

---

##### `MirroringEndpointGroupId`<sup>Required</sup> <a name="MirroringEndpointGroupId" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.mirroringEndpointGroupId"></a>

```csharp
public string MirroringEndpointGroupId { get; set; }
```

- *Type:* string

The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#mirroring_endpoint_group_id GoogleNetworkSecurityMirroringEndpointGroup#mirroring_endpoint_group_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description of the endpoint group. Used as additional context for the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#description GoogleNetworkSecurityMirroringEndpointGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#id GoogleNetworkSecurityMirroringEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#labels GoogleNetworkSecurityMirroringEndpointGroup#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#project GoogleNetworkSecurityMirroringEndpointGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConfig.property.timeouts"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts">GoogleNetworkSecurityMirroringEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#timeouts GoogleNetworkSecurityMirroringEndpointGroup#timeouts}

---

### GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups <a name="GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups {

};
```


### GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations <a name="GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations {

};
```


### GoogleNetworkSecurityMirroringEndpointGroupTimeouts <a name="GoogleNetworkSecurityMirroringEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#create GoogleNetworkSecurityMirroringEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#delete GoogleNetworkSecurityMirroringEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#update GoogleNetworkSecurityMirroringEndpointGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#create GoogleNetworkSecurityMirroringEndpointGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#delete GoogleNetworkSecurityMirroringEndpointGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.0/docs/resources/google_network_security_mirroring_endpoint_group#update GoogleNetworkSecurityMirroringEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringEndpointGroupAssociationsList <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.get"></a>

```csharp
private GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociations">GoogleNetworkSecurityMirroringEndpointGroupAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociationsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupAssociations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupAssociations">GoogleNetworkSecurityMirroringEndpointGroupAssociations</a>

---


### GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList <a name="GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get"></a>

```csharp
private GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList <a name="GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get"></a>

```csharp
private GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocations</a>

---


### GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.locations"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList Locations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsLocationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroupsOutputReference.property.internalValue"></a>

```csharp
public GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups">GoogleNetworkSecurityMirroringEndpointGroupConnectedDeploymentGroups</a>

---


### GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetworkSecurityMirroringEndpointGroup.GoogleNetworkSecurityMirroringEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



