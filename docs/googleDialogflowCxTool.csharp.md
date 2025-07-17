# `googleDialogflowCxTool` Submodule <a name="`googleDialogflowCxTool` Submodule" id="@cdktf/provider-google-beta.googleDialogflowCxTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDialogflowCxTool <a name="GoogleDialogflowCxTool" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool google_dialogflow_cx_tool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxTool(Construct Scope, string Id, GoogleDialogflowCxToolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig">GoogleDialogflowCxToolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig">GoogleDialogflowCxToolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec">PutDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec">PutFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec">PutOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec">ResetDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec">ResetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec">ResetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataStoreSpec` <a name="PutDataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec"></a>

```csharp
private void PutDataStoreSpec(GoogleDialogflowCxToolDataStoreSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putDataStoreSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---

##### `PutFunctionSpec` <a name="PutFunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec"></a>

```csharp
private void PutFunctionSpec(GoogleDialogflowCxToolFunctionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---

##### `PutOpenApiSpec` <a name="PutOpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec"></a>

```csharp
private void PutOpenApiSpec(GoogleDialogflowCxToolOpenApiSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDialogflowCxToolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

---

##### `ResetDataStoreSpec` <a name="ResetDataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetDataStoreSpec"></a>

```csharp
private void ResetDataStoreSpec()
```

##### `ResetFunctionSpec` <a name="ResetFunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetFunctionSpec"></a>

```csharp
private void ResetFunctionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOpenApiSpec` <a name="ResetOpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetOpenApiSpec"></a>

```csharp
private void ResetOpenApiSpec()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDialogflowCxTool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxTool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxTool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxTool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDialogflowCxTool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDialogflowCxTool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDialogflowCxTool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDialogflowCxTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDialogflowCxTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec">DataStoreSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType">ToolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput">DataStoreSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput">FunctionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput">OpenApiSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataStoreSpec`<sup>Required</sup> <a name="DataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpec"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpecOutputReference DataStoreSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference">GoogleDialogflowCxToolDataStoreSpecOutputReference</a>

---

##### `FunctionSpec`<sup>Required</sup> <a name="FunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpec"></a>

```csharp
public GoogleDialogflowCxToolFunctionSpecOutputReference FunctionSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference">GoogleDialogflowCxToolFunctionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenApiSpec`<sup>Required</sup> <a name="OpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpec"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecOutputReference OpenApiSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference">GoogleDialogflowCxToolOpenApiSpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeouts"></a>

```csharp
public GoogleDialogflowCxToolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference">GoogleDialogflowCxToolTimeoutsOutputReference</a>

---

##### `ToolType`<sup>Required</sup> <a name="ToolType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.toolType"></a>

```csharp
public string ToolType { get; }
```

- *Type:* string

---

##### `DataStoreSpecInput`<sup>Optional</sup> <a name="DataStoreSpecInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.dataStoreSpecInput"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpec DataStoreSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FunctionSpecInput`<sup>Optional</sup> <a name="FunctionSpecInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.functionSpecInput"></a>

```csharp
public GoogleDialogflowCxToolFunctionSpec FunctionSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OpenApiSpecInput`<sup>Optional</sup> <a name="OpenApiSpecInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.openApiSpecInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpec OpenApiSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxTool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDialogflowCxToolConfig <a name="GoogleDialogflowCxToolConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string DisplayName,
    GoogleDialogflowCxToolDataStoreSpec DataStoreSpec = null,
    GoogleDialogflowCxToolFunctionSpec FunctionSpec = null,
    string Id = null,
    GoogleDialogflowCxToolOpenApiSpec OpenApiSpec = null,
    string Parent = null,
    GoogleDialogflowCxToolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description">Description</a></code> | <code>string</code> | High level description of the Tool and its usage. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the tool, unique within the agent. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec">DataStoreSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | data_store_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec">FunctionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec">OpenApiSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent">Parent</a></code> | <code>string</code> | The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

High level description of the Tool and its usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#description GoogleDialogflowCxTool#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the tool, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

##### `DataStoreSpec`<sup>Optional</sup> <a name="DataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.dataStoreSpec"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpec DataStoreSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

data_store_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_spec GoogleDialogflowCxTool#data_store_spec}

---

##### `FunctionSpec`<sup>Optional</sup> <a name="FunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.functionSpec"></a>

```csharp
public GoogleDialogflowCxToolFunctionSpec FunctionSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#function_spec GoogleDialogflowCxTool#function_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#id GoogleDialogflowCxTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpenApiSpec`<sup>Optional</sup> <a name="OpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.openApiSpec"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpec OpenApiSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#open_api_spec GoogleDialogflowCxTool#open_api_spec}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The agent to create a Tool for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#parent GoogleDialogflowCxTool#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolConfig.property.timeouts"></a>

```csharp
public GoogleDialogflowCxToolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts">GoogleDialogflowCxToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#timeouts GoogleDialogflowCxTool#timeouts}

---

### GoogleDialogflowCxToolDataStoreSpec <a name="GoogleDialogflowCxToolDataStoreSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolDataStoreSpec {
    object DataStoreConnections,
    GoogleDialogflowCxToolDataStoreSpecFallbackPrompt FallbackPrompt
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections">DataStoreConnections</a></code> | <code>object</code> | data_store_connections block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt">FallbackPrompt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | fallback_prompt block. |

---

##### `DataStoreConnections`<sup>Required</sup> <a name="DataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.dataStoreConnections"></a>

```csharp
public object DataStoreConnections { get; set; }
```

- *Type:* object

data_store_connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_connections GoogleDialogflowCxTool#data_store_connections}

---

##### `FallbackPrompt`<sup>Required</sup> <a name="FallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec.property.fallbackPrompt"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpecFallbackPrompt FallbackPrompt { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

fallback_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#fallback_prompt GoogleDialogflowCxTool#fallback_prompt}

---

### GoogleDialogflowCxToolDataStoreSpecDataStoreConnections <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolDataStoreSpecDataStoreConnections {
    string DataStore = null,
    string DataStoreType = null,
    string DocumentProcessingMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore">DataStore</a></code> | <code>string</code> | The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode">DocumentProcessingMode</a></code> | <code>string</code> | The document processing mode for the data store connection. |

---

##### `DataStore`<sup>Optional</sup> <a name="DataStore" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStore"></a>

```csharp
public string DataStore { get; set; }
```

- *Type:* string

The full name of the referenced data store. Formats: projects/{project}/locations/{location}/collections/{collection}/dataStores/{dataStore} projects/{project}/locations/{location}/dataStores/{dataStore}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store GoogleDialogflowCxTool#data_store}

---

##### `DataStoreType`<sup>Optional</sup> <a name="DataStoreType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; set; }
```

- *Type:* string

The type of the connected data store. See [DataStoreType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#datastoretype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#data_store_type GoogleDialogflowCxTool#data_store_type}

---

##### `DocumentProcessingMode`<sup>Optional</sup> <a name="DocumentProcessingMode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnections.property.documentProcessingMode"></a>

```csharp
public string DocumentProcessingMode { get; set; }
```

- *Type:* string

The document processing mode for the data store connection.

Should only be set for PUBLIC_WEB and UNSTRUCTURED data stores. If not set it is considered as DOCUMENTS, as this is the legacy mode.
See [DocumentProcessingMode](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/DataStoreConnection#documentprocessingmode) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#document_processing_mode GoogleDialogflowCxTool#document_processing_mode}

---

### GoogleDialogflowCxToolDataStoreSpecFallbackPrompt <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolDataStoreSpecFallbackPrompt {

};
```


### GoogleDialogflowCxToolFunctionSpec <a name="GoogleDialogflowCxToolFunctionSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolFunctionSpec {
    string InputSchema = null,
    string OutputSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema">InputSchema</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema">OutputSchema</a></code> | <code>string</code> | Optional. |

---

##### `InputSchema`<sup>Optional</sup> <a name="InputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.inputSchema"></a>

```csharp
public string InputSchema { get; set; }
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#input_schema GoogleDialogflowCxTool#input_schema}

---

##### `OutputSchema`<sup>Optional</sup> <a name="OutputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec.property.outputSchema"></a>

```csharp
public string OutputSchema { get; set; }
```

- *Type:* string

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#output_schema GoogleDialogflowCxTool#output_schema}

---

### GoogleDialogflowCxToolOpenApiSpec <a name="GoogleDialogflowCxToolOpenApiSpec" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpec {
    string TextSchema,
    GoogleDialogflowCxToolOpenApiSpecAuthentication Authentication = null,
    GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig ServiceDirectoryConfig = null,
    GoogleDialogflowCxToolOpenApiSpecTlsConfig TlsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema">TextSchema</a></code> | <code>string</code> | The OpenAPI schema specified as a text. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.textSchema"></a>

```csharp
public string TextSchema { get; set; }
```

- *Type:* string

The OpenAPI schema specified as a text.

This field is part of a union field 'schema': only one of 'textSchema' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#text_schema GoogleDialogflowCxTool#text_schema}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.authentication"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#authentication GoogleDialogflowCxTool#authentication}

---

##### `ServiceDirectoryConfig`<sup>Optional</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig ServiceDirectoryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_directory_config GoogleDialogflowCxTool#service_directory_config}

---

##### `TlsConfig`<sup>Optional</sup> <a name="TlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec.property.tlsConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecTlsConfig TlsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#tls_config GoogleDialogflowCxTool#tls_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthentication <a name="GoogleDialogflowCxToolOpenApiSpecAuthentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthentication {
    GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig ApiKeyConfig = null,
    GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig BearerTokenConfig = null,
    GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig OauthConfig = null,
    GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig ServiceAgentAuthConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `ApiKeyConfig`<sup>Optional</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig ApiKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#api_key_config GoogleDialogflowCxTool#api_key_config}

---

##### `BearerTokenConfig`<sup>Optional</sup> <a name="BearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig BearerTokenConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#bearer_token_config GoogleDialogflowCxTool#bearer_token_config}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#oauth_config GoogleDialogflowCxTool#oauth_config}

---

##### `ServiceAgentAuthConfig`<sup>Optional</sup> <a name="ServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig ServiceAgentAuthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth_config GoogleDialogflowCxTool#service_agent_auth_config}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig {
    string KeyName,
    string RequestLocation,
    string ApiKey = null,
    string SecretVersionForApiKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">KeyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">RequestLocation</a></code> | <code>string</code> | Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>string</code> | Optional. |

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```csharp
public string KeyName { get; set; }
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#key_name GoogleDialogflowCxTool#key_name}

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```csharp
public string RequestLocation { get; set; }
```

- *Type:* string

Key location in the request. See [RequestLocation](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#requestlocation) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#request_location GoogleDialogflowCxTool#request_location}

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

Optional. The API key. If the 'secretVersionForApiKey'' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#api_key GoogleDialogflowCxTool#api_key}

---

##### `SecretVersionForApiKey`<sup>Optional</sup> <a name="SecretVersionForApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```csharp
public string SecretVersionForApiKey { get; set; }
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the apiKey field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_api_key GoogleDialogflowCxTool#secret_version_for_api_key}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig {
    string SecretVersionForToken = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">Token</a></code> | <code>string</code> | Optional. |

---

##### `SecretVersionForToken`<sup>Optional</sup> <a name="SecretVersionForToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```csharp
public string SecretVersionForToken { get; set; }
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the Bearer token. If this field is set, the 'token' field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_token GoogleDialogflowCxTool#secret_version_for_token}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Optional.

The text token appended to the text Bearer to the request Authorization header.
[Session parameters reference](https://cloud.google.com/dialogflow/cx/docs/concept/parameter#session-ref) can be used to pass the token dynamically, e.g. '$session.params.parameter-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#token GoogleDialogflowCxTool#token}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig {
    string ClientId,
    string OauthGrantType,
    string TokenEndpoint,
    string ClientSecret = null,
    string[] Scopes = null,
    string SecretVersionForClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | Optional. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#client_id GoogleDialogflowCxTool#client_id}

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; set; }
```

- *Type:* string

OAuth grant types. See [OauthGrantType](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#oauthgranttype) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#oauth_grant_type GoogleDialogflowCxTool#oauth_grant_type}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#token_endpoint GoogleDialogflowCxTool#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#client_secret GoogleDialogflowCxTool#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#scopes GoogleDialogflowCxTool#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; set; }
```

- *Type:* string

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the clientSecret field will be ignored.
Format: projects/{project}/secrets/{secret}/versions/{version}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#secret_version_for_client_secret GoogleDialogflowCxTool#secret_version_for_client_secret}

---

### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig {
    string ServiceAgentAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | Optional. |

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; set; }
```

- *Type:* string

Optional.

Indicate the auth token type generated from the Diglogflow service agent.
The generated token is sent in the Authorization header.
See [ServiceAgentAuth](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#serviceagentauth) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service_agent_auth GoogleDialogflowCxTool#service_agent_auth}

---

### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig {
    string Service
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service">Service</a></code> | <code>string</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>. LocationID of the service directory must be the same as the location of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#service GoogleDialogflowCxTool#service}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfig <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecTlsConfig {
    object CaCerts
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts">CaCerts</a></code> | <code>object</code> | ca_certs block. |

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig.property.caCerts"></a>

```csharp
public object CaCerts { get; set; }
```

- *Type:* object

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#ca_certs GoogleDialogflowCxTool#ca_certs}

---

### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts {
    string Cert,
    string DisplayName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert">Cert</a></code> | <code>string</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName">DisplayName</a></code> | <code>string</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```csharp
public string Cert { get; set; }
```

- *Type:* string

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
For instance a certificate can be self-signed using the following command:

```
  openssl x509 -req -days 200 -in example.com.csr \
    -signkey example.com.key \
    -out example.com.crt \
    -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
```

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#cert GoogleDialogflowCxTool#cert}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#display_name GoogleDialogflowCxTool#display_name}

---

### GoogleDialogflowCxToolTimeouts <a name="GoogleDialogflowCxToolTimeouts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#create GoogleDialogflowCxTool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#delete GoogleDialogflowCxTool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_dialogflow_cx_tool#update GoogleDialogflowCxTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get"></a>

```csharp
private GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore">ResetDataStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType">ResetDataStoreType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode">ResetDocumentProcessingMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataStore` <a name="ResetDataStore" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStore"></a>

```csharp
private void ResetDataStore()
```

##### `ResetDataStoreType` <a name="ResetDataStoreType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDataStoreType"></a>

```csharp
private void ResetDataStoreType()
```

##### `ResetDocumentProcessingMode` <a name="ResetDocumentProcessingMode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.resetDocumentProcessingMode"></a>

```csharp
private void ResetDocumentProcessingMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput">DataStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput">DocumentProcessingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode">DocumentProcessingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreInput`<sup>Optional</sup> <a name="DataStoreInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreInput"></a>

```csharp
public string DataStoreInput { get; }
```

- *Type:* string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreTypeInput"></a>

```csharp
public string DataStoreTypeInput { get; }
```

- *Type:* string

---

##### `DocumentProcessingModeInput`<sup>Optional</sup> <a name="DocumentProcessingModeInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingModeInput"></a>

```csharp
public string DocumentProcessingModeInput { get; }
```

- *Type:* string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; }
```

- *Type:* string

---

##### `DocumentProcessingMode`<sup>Required</sup> <a name="DocumentProcessingMode" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.documentProcessingMode"></a>

```csharp
public string DocumentProcessingMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpecFallbackPrompt InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---


### GoogleDialogflowCxToolDataStoreSpecOutputReference <a name="GoogleDialogflowCxToolDataStoreSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolDataStoreSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections">PutDataStoreConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt">PutFallbackPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataStoreConnections` <a name="PutDataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections"></a>

```csharp
private void PutDataStoreConnections(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putDataStoreConnections.parameter.value"></a>

- *Type:* object

---

##### `PutFallbackPrompt` <a name="PutFallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt"></a>

```csharp
private void PutFallbackPrompt(GoogleDialogflowCxToolDataStoreSpecFallbackPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.putFallbackPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections">DataStoreConnections</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt">FallbackPrompt</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput">DataStoreConnectionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput">FallbackPromptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreConnections`<sup>Required</sup> <a name="DataStoreConnections" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnections"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList DataStoreConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList">GoogleDialogflowCxToolDataStoreSpecDataStoreConnectionsList</a>

---

##### `FallbackPrompt`<sup>Required</sup> <a name="FallbackPrompt" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPrompt"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference FallbackPrompt { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference">GoogleDialogflowCxToolDataStoreSpecFallbackPromptOutputReference</a>

---

##### `DataStoreConnectionsInput`<sup>Optional</sup> <a name="DataStoreConnectionsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.dataStoreConnectionsInput"></a>

```csharp
public object DataStoreConnectionsInput { get; }
```

- *Type:* object

---

##### `FallbackPromptInput`<sup>Optional</sup> <a name="FallbackPromptInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.fallbackPromptInput"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpecFallbackPrompt FallbackPromptInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecFallbackPrompt">GoogleDialogflowCxToolDataStoreSpecFallbackPrompt</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolDataStoreSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolDataStoreSpec">GoogleDialogflowCxToolDataStoreSpec</a>

---


### GoogleDialogflowCxToolFunctionSpecOutputReference <a name="GoogleDialogflowCxToolFunctionSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolFunctionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema">ResetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema">ResetOutputSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputSchema` <a name="ResetInputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetInputSchema"></a>

```csharp
private void ResetInputSchema()
```

##### `ResetOutputSchema` <a name="ResetOutputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.resetOutputSchema"></a>

```csharp
private void ResetOutputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput">InputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput">OutputSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema">InputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema">OutputSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputSchemaInput`<sup>Optional</sup> <a name="InputSchemaInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```csharp
public string InputSchemaInput { get; }
```

- *Type:* string

---

##### `OutputSchemaInput`<sup>Optional</sup> <a name="OutputSchemaInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```csharp
public string OutputSchemaInput { get; }
```

- *Type:* string

---

##### `InputSchema`<sup>Required</sup> <a name="InputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.inputSchema"></a>

```csharp
public string InputSchema { get; }
```

- *Type:* string

---

##### `OutputSchema`<sup>Required</sup> <a name="OutputSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.outputSchema"></a>

```csharp
public string OutputSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolFunctionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolFunctionSpec">GoogleDialogflowCxToolFunctionSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">ResetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetSecretVersionForApiKey` <a name="ResetSecretVersionForApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```csharp
private void ResetSecretVersionForApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">KeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">RequestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">SecretVersionForApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">KeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">RequestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">SecretVersionForApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `KeyNameInput`<sup>Optional</sup> <a name="KeyNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```csharp
public string KeyNameInput { get; }
```

- *Type:* string

---

##### `RequestLocationInput`<sup>Optional</sup> <a name="RequestLocationInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```csharp
public string RequestLocationInput { get; }
```

- *Type:* string

---

##### `SecretVersionForApiKeyInput`<sup>Optional</sup> <a name="SecretVersionForApiKeyInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```csharp
public string SecretVersionForApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `KeyName`<sup>Required</sup> <a name="KeyName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```csharp
public string KeyName { get; }
```

- *Type:* string

---

##### `RequestLocation`<sup>Required</sup> <a name="RequestLocation" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```csharp
public string RequestLocation { get; }
```

- *Type:* string

---

##### `SecretVersionForApiKey`<sup>Required</sup> <a name="SecretVersionForApiKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```csharp
public string SecretVersionForApiKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">ResetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretVersionForToken` <a name="ResetSecretVersionForToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```csharp
private void ResetSecretVersionForToken()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">SecretVersionForTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">SecretVersionForToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionForTokenInput`<sup>Optional</sup> <a name="SecretVersionForTokenInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```csharp
public string SecretVersionForTokenInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `SecretVersionForToken`<sup>Required</sup> <a name="SecretVersionForToken" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```csharp
public string SecretVersionForToken { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```csharp
private void ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">OauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">OauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthGrantTypeInput`<sup>Optional</sup> <a name="OauthGrantTypeInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```csharp
public string OauthGrantTypeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```csharp
public string SecretVersionForClientSecretInput { get; }
```

- *Type:* string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `OauthGrantType`<sup>Required</sup> <a name="OauthGrantType" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```csharp
public string OauthGrantType { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">PutApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">PutBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">PutServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">ResetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">ResetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">ResetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyConfig` <a name="PutApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```csharp
private void PutApiKeyConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `PutBearerTokenConfig` <a name="PutBearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```csharp
private void PutBearerTokenConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```csharp
private void PutOauthConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `PutServiceAgentAuthConfig` <a name="PutServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```csharp
private void PutServiceAgentAuthConfig(GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `ResetApiKeyConfig` <a name="ResetApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```csharp
private void ResetApiKeyConfig()
```

##### `ResetBearerTokenConfig` <a name="ResetBearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```csharp
private void ResetBearerTokenConfig()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```csharp
private void ResetOauthConfig()
```

##### `ResetServiceAgentAuthConfig` <a name="ResetServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```csharp
private void ResetServiceAgentAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">ApiKeyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">BearerTokenConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">ServiceAgentAuthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">ApiKeyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">BearerTokenConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">ServiceAgentAuthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyConfig`<sup>Required</sup> <a name="ApiKeyConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference ApiKeyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `BearerTokenConfig`<sup>Required</sup> <a name="BearerTokenConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference BearerTokenConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `ServiceAgentAuthConfig`<sup>Required</sup> <a name="ServiceAgentAuthConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference ServiceAgentAuthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `ApiKeyConfigInput`<sup>Optional</sup> <a name="ApiKeyConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig ApiKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `BearerTokenConfigInput`<sup>Optional</sup> <a name="BearerTokenConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig BearerTokenConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `ServiceAgentAuthConfigInput`<sup>Optional</sup> <a name="ServiceAgentAuthConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig ServiceAgentAuthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---


### GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```csharp
private void ResetServiceAgentAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```csharp
public string ServiceAgentAuthInput { get; }
```

- *Type:* string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig">GoogleDialogflowCxToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig">PutServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig">PutTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">ResetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig">ResetTlsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication"></a>

```csharp
private void PutAuthentication(GoogleDialogflowCxToolOpenApiSpecAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---

##### `PutServiceDirectoryConfig` <a name="PutServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```csharp
private void PutServiceDirectoryConfig(GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `PutTlsConfig` <a name="PutTlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig"></a>

```csharp
private void PutTlsConfig(GoogleDialogflowCxToolOpenApiSpecTlsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetServiceDirectoryConfig` <a name="ResetServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```csharp
private void ResetServiceDirectoryConfig()
```

##### `ResetTlsConfig` <a name="ResetTlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```csharp
private void ResetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">ServiceDirectoryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig">TlsConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">ServiceDirectoryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput">TextSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput">TlsConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema">TextSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authentication"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference">GoogleDialogflowCxToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `ServiceDirectoryConfig`<sup>Required</sup> <a name="ServiceDirectoryConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference ServiceDirectoryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `TlsConfig`<sup>Required</sup> <a name="TlsConfig" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference TlsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference">GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecAuthentication">GoogleDialogflowCxToolOpenApiSpecAuthentication</a>

---

##### `ServiceDirectoryConfigInput`<sup>Optional</sup> <a name="ServiceDirectoryConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig ServiceDirectoryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `TextSchemaInput`<sup>Optional</sup> <a name="TextSchemaInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```csharp
public string TextSchemaInput { get; }
```

- *Type:* string

---

##### `TlsConfigInput`<sup>Optional</sup> <a name="TlsConfigInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecTlsConfig TlsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---

##### `TextSchema`<sup>Required</sup> <a name="TextSchema" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.textSchema"></a>

```csharp
public string TextSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpec">GoogleDialogflowCxToolOpenApiSpec</a>

---


### GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig">GoogleDialogflowCxToolOpenApiSpecServiceDirectoryConfig</a>

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```csharp
private GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">CertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">Cert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```csharp
public string CertInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```csharp
public string Cert { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference <a name="GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts">PutCaCerts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaCerts` <a name="PutCaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```csharp
private void PutCaCerts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts">CaCerts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">CaCertsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCerts`<sup>Required</sup> <a name="CaCerts" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList CaCerts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList">GoogleDialogflowCxToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `CaCertsInput`<sup>Optional</sup> <a name="CaCertsInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```csharp
public object CaCertsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDialogflowCxToolOpenApiSpecTlsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolOpenApiSpecTlsConfig">GoogleDialogflowCxToolOpenApiSpecTlsConfig</a>

---


### GoogleDialogflowCxToolTimeoutsOutputReference <a name="GoogleDialogflowCxToolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDialogflowCxToolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDialogflowCxTool.GoogleDialogflowCxToolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



