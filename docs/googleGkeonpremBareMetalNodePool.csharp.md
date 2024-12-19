# `googleGkeonpremBareMetalNodePool` Submodule <a name="`googleGkeonpremBareMetalNodePool` Submodule" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeonpremBareMetalNodePool <a name="GoogleGkeonpremBareMetalNodePool" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool google_gkeonprem_bare_metal_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePool(Construct Scope, string Id, GoogleGkeonpremBareMetalNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig">GoogleGkeonpremBareMetalNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig">GoogleGkeonpremBareMetalNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putNodePoolConfig">PutNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNodePoolConfig` <a name="PutNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putNodePoolConfig"></a>

```csharp
private void PutNodePoolConfig(GoogleGkeonpremBareMetalNodePoolNodePoolConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putNodePoolConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGkeonpremBareMetalNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleGkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremBareMetalNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremBareMetalNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremBareMetalNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleGkeonpremBareMetalNodePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleGkeonpremBareMetalNodePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeonpremBareMetalNodePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeonpremBareMetalNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleGkeonpremBareMetalNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList">GoogleGkeonpremBareMetalNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference">GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalClusterInput">BareMetalClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfigInput">NodePoolConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalCluster">BareMetalCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `NodePoolConfig`<sup>Required</sup> <a name="NodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfig"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference NodePoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference">GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.status"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList">GoogleGkeonpremBareMetalNodePoolStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeouts"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference">GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BareMetalClusterInput`<sup>Optional</sup> <a name="BareMetalClusterInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalClusterInput"></a>

```csharp
public string BareMetalClusterInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodePoolConfigInput`<sup>Optional</sup> <a name="NodePoolConfigInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.nodePoolConfigInput"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolNodePoolConfig NodePoolConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BareMetalCluster`<sup>Required</sup> <a name="BareMetalCluster" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.bareMetalCluster"></a>

```csharp
public string BareMetalCluster { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeonpremBareMetalNodePoolConfig <a name="GoogleGkeonpremBareMetalNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BareMetalCluster,
    string Location,
    string Name,
    GoogleGkeonpremBareMetalNodePoolNodePoolConfig NodePoolConfig,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleGkeonpremBareMetalNodePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.bareMetalCluster">BareMetalCluster</a></code> | <code>string</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.name">Name</a></code> | <code>string</code> | The bare metal node pool name. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.nodePoolConfig">NodePoolConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a></code> | node_pool_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations on the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the Bare Metal Node Pool. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#id GoogleGkeonpremBareMetalNodePool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#project GoogleGkeonpremBareMetalNodePool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BareMetalCluster`<sup>Required</sup> <a name="BareMetalCluster" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.bareMetalCluster"></a>

```csharp
public string BareMetalCluster { get; set; }
```

- *Type:* string

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#bare_metal_cluster GoogleGkeonpremBareMetalNodePool#bare_metal_cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#location GoogleGkeonpremBareMetalNodePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The bare metal node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#name GoogleGkeonpremBareMetalNodePool#name}

---

##### `NodePoolConfig`<sup>Required</sup> <a name="NodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.nodePoolConfig"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolNodePoolConfig NodePoolConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

node_pool_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#node_pool_config GoogleGkeonpremBareMetalNodePool#node_pool_config}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations on the Bare Metal Node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#annotations GoogleGkeonpremBareMetalNodePool#annotations}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the Bare Metal Node Pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#display_name GoogleGkeonpremBareMetalNodePool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#id GoogleGkeonpremBareMetalNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#project GoogleGkeonpremBareMetalNodePool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolConfig.property.timeouts"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts">GoogleGkeonpremBareMetalNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#timeouts GoogleGkeonpremBareMetalNodePool#timeouts}

---

### GoogleGkeonpremBareMetalNodePoolNodePoolConfig <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfig" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfig {
    object NodeConfigs,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string OperatingSystem = null,
    object Taints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs">NodeConfigs</a></code> | <code>object</code> | node_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.taints">Taints</a></code> | <code>object</code> | taints block. |

---

##### `NodeConfigs`<sup>Required</sup> <a name="NodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.nodeConfigs"></a>

```csharp
public object NodeConfigs { get; set; }
```

- *Type:* object

node_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#node_configs GoogleGkeonpremBareMetalNodePool#node_configs}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#labels GoogleGkeonpremBareMetalNodePool#labels}

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Specifies the nodes operating system (default: LINUX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#operating_system GoogleGkeonpremBareMetalNodePool#operating_system}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig.property.taints"></a>

```csharp
public object Taints { get; set; }
```

- *Type:* object

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#taints GoogleGkeonpremBareMetalNodePool#taints}

---

### GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs {
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string NodeIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp">NodeIp</a></code> | <code>string</code> | The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s)
that Kubernetes may apply to the node. In case of conflict in
label keys, the applied set may differ depending on the Kubernetes
version -- it's best to assume the behavior is undefined and
conflicts should be avoided. For more information, including usage
and the valid values, see:

* http://kubernetes.io/v1.1/docs/user-guide/labels.html
  An object containing a list of "key": value pairs.
  For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#labels GoogleGkeonpremBareMetalNodePool#labels}

---

##### `NodeIp`<sup>Optional</sup> <a name="NodeIp" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigs.property.nodeIp"></a>

```csharp
public string NodeIp { get; set; }
```

- *Type:* string

The default IPv4 address for SSH access and Kubernetes node. Example: 192.168.0.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#node_ip GoogleGkeonpremBareMetalNodePool#node_ip}

---

### GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints {
    string Effect = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect">Effect</a></code> | <code>string</code> | Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key">Key</a></code> | <code>string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value">Value</a></code> | <code>string</code> | Value associated with the effect. |

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#effect GoogleGkeonpremBareMetalNodePool#effect}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#key GoogleGkeonpremBareMetalNodePool#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaints.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#value GoogleGkeonpremBareMetalNodePool#value}

---

### GoogleGkeonpremBareMetalNodePoolStatus <a name="GoogleGkeonpremBareMetalNodePoolStatus" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolStatus {

};
```


### GoogleGkeonpremBareMetalNodePoolStatusConditions <a name="GoogleGkeonpremBareMetalNodePoolStatusConditions" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolStatusConditions {

};
```


### GoogleGkeonpremBareMetalNodePoolTimeouts <a name="GoogleGkeonpremBareMetalNodePoolTimeouts" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#create GoogleGkeonpremBareMetalNodePool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#delete GoogleGkeonpremBareMetalNodePool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#update GoogleGkeonpremBareMetalNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#create GoogleGkeonpremBareMetalNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#delete GoogleGkeonpremBareMetalNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gkeonprem_bare_metal_node_pool#update GoogleGkeonpremBareMetalNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get"></a>

```csharp
private GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp">ResetNodeIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNodeIp` <a name="ResetNodeIp" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.resetNodeIp"></a>

```csharp
private void ResetNodeIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput">NodeIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp">NodeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodeIpInput`<sup>Optional</sup> <a name="NodeIpInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIpInput"></a>

```csharp
public string NodeIpInput { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodeIp`<sup>Required</sup> <a name="NodeIp" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.nodeIp"></a>

```csharp
public string NodeIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs">PutNodeConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeConfigs` <a name="PutNodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs"></a>

```csharp
private void PutNodeConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putNodeConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints"></a>

```csharp
private void PutTaints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.putTaints.parameter.value"></a>

- *Type:* object

---

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.resetTaints"></a>

```csharp
private void ResetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs">NodeConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput">NodeConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput">TaintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeConfigs`<sup>Required</sup> <a name="NodeConfigs" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigs"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList NodeConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigNodeConfigsList</a>

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taints"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList Taints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList">GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodeConfigsInput`<sup>Optional</sup> <a name="NodeConfigsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.nodeConfigsInput"></a>

```csharp
public object NodeConfigsInput { get; }
```

- *Type:* object

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.taintsInput"></a>

```csharp
public object TaintsInput { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolNodePoolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfig">GoogleGkeonpremBareMetalNodePoolNodePoolConfig</a>

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get"></a>

```csharp
private GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetEffect"></a>

```csharp
private void ResetEffect()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleGkeonpremBareMetalNodePoolStatusConditionsList <a name="GoogleGkeonpremBareMetalNodePoolStatusConditionsList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.get"></a>

```csharp
private GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions">GoogleGkeonpremBareMetalNodePoolStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditions">GoogleGkeonpremBareMetalNodePoolStatusConditions</a>

---


### GoogleGkeonpremBareMetalNodePoolStatusList <a name="GoogleGkeonpremBareMetalNodePoolStatusList" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.get"></a>

```csharp
private GoogleGkeonpremBareMetalNodePoolStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleGkeonpremBareMetalNodePoolStatusOutputReference <a name="GoogleGkeonpremBareMetalNodePoolStatusOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList">GoogleGkeonpremBareMetalNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus">GoogleGkeonpremBareMetalNodePoolStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.conditions"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusConditionsList">GoogleGkeonpremBareMetalNodePoolStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeonpremBareMetalNodePoolStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolStatus">GoogleGkeonpremBareMetalNodePoolStatus</a>

---


### GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference <a name="GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleGkeonpremBareMetalNodePool.GoogleGkeonpremBareMetalNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



