# `googleStorageControlFolderIntelligenceConfig` Submodule <a name="`googleStorageControlFolderIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleStorageControlFolderIntelligenceConfig <a name="GoogleStorageControlFolderIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config google_storage_control_folder_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfig(Construct Scope, string Id, GoogleStorageControlFolderIntelligenceConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig">GoogleStorageControlFolderIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig">GoogleStorageControlFolderIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetEditionConfig">ResetEditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter"></a>

```csharp
private void PutFilter(GoogleStorageControlFolderIntelligenceConfigFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleStorageControlFolderIntelligenceConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

---

##### `ResetEditionConfig` <a name="ResetEditionConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetEditionConfig"></a>

```csharp
private void ResetEditionConfig()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleStorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageControlFolderIntelligenceConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageControlFolderIntelligenceConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageControlFolderIntelligenceConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleStorageControlFolderIntelligenceConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleStorageControlFolderIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleStorageControlFolderIntelligenceConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleStorageControlFolderIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleStorageControlFolderIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig">EffectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.trialConfig">TrialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList">GoogleStorageControlFolderIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfigInput">EditionConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfig">EditionConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EffectiveIntelligenceConfig`<sup>Required</sup> <a name="EffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList EffectiveIntelligenceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filter"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeouts"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference">GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference</a>

---

##### `TrialConfig`<sup>Required</sup> <a name="TrialConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.trialConfig"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigTrialConfigList TrialConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList">GoogleStorageControlFolderIntelligenceConfigTrialConfigList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `EditionConfigInput`<sup>Optional</sup> <a name="EditionConfigInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfigInput"></a>

```csharp
public string EditionConfigInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.filterInput"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleStorageControlFolderIntelligenceConfigTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

---

##### `EditionConfig`<sup>Required</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.editionConfig"></a>

```csharp
public string EditionConfig { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleStorageControlFolderIntelligenceConfigConfig <a name="GoogleStorageControlFolderIntelligenceConfigConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string EditionConfig = null,
    GoogleStorageControlFolderIntelligenceConfigFilter Filter = null,
    string Id = null,
    GoogleStorageControlFolderIntelligenceConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.name">Name</a></code> | <code>string</code> | Identifier of the GCP Folder. For GCP Folder, this field can be folder number. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.editionConfig">EditionConfig</a></code> | <code>string</code> | Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier of the GCP Folder. For GCP Folder, this field can be folder number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#name GoogleStorageControlFolderIntelligenceConfig#name}

---

##### `EditionConfig`<sup>Optional</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.editionConfig"></a>

```csharp
public string EditionConfig { get; set; }
```

- *Type:* string

Edition configuration of the Storage Intelligence resource. Valid values are INHERIT, TRIAL, DISABLED and STANDARD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#edition_config GoogleStorageControlFolderIntelligenceConfig#edition_config}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.filter"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#filter GoogleStorageControlFolderIntelligenceConfig#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#id GoogleStorageControlFolderIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigConfig.property.timeouts"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#timeouts GoogleStorageControlFolderIntelligenceConfig#timeouts}

---

### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig {

};
```


### GoogleStorageControlFolderIntelligenceConfigFilter <a name="GoogleStorageControlFolderIntelligenceConfigFilter" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilter {
    GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets ExcludedCloudStorageBuckets = null,
    GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations ExcludedCloudStorageLocations = null,
    GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBuckets = null,
    GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations IncludedCloudStorageLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | excluded_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | excluded_cloud_storage_locations block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | included_cloud_storage_buckets block. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | included_cloud_storage_locations block. |

---

##### `ExcludedCloudStorageBuckets`<sup>Optional</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageBuckets"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets ExcludedCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

excluded_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_buckets}

---

##### `ExcludedCloudStorageLocations`<sup>Optional</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.excludedCloudStorageLocations"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations ExcludedCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

excluded_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#excluded_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#excluded_cloud_storage_locations}

---

##### `IncludedCloudStorageBuckets`<sup>Optional</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageBuckets"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBuckets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

included_cloud_storage_buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_buckets GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_buckets}

---

##### `IncludedCloudStorageLocations`<sup>Optional</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter.property.includedCloudStorageLocations"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations IncludedCloudStorageLocations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

included_cloud_storage_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#included_cloud_storage_locations GoogleStorageControlFolderIntelligenceConfig#included_cloud_storage_locations}

---

### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets {
    string[] BucketIdRegexes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; set; }
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets {
    string[] BucketIdRegexes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | List of bucket id regexes to exclude in the storage intelligence plan. |

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; set; }
```

- *Type:* string[]

List of bucket id regexes to exclude in the storage intelligence plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#bucket_id_regexes GoogleStorageControlFolderIntelligenceConfig#bucket_id_regexes}

---

### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations {
    string[] Locations
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations">Locations</a></code> | <code>string[]</code> | List of locations. |

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

List of locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#locations GoogleStorageControlFolderIntelligenceConfig#locations}

---

### GoogleStorageControlFolderIntelligenceConfigTimeouts <a name="GoogleStorageControlFolderIntelligenceConfigTimeouts" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#create GoogleStorageControlFolderIntelligenceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#delete GoogleStorageControlFolderIntelligenceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#update GoogleStorageControlFolderIntelligenceConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#create GoogleStorageControlFolderIntelligenceConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#delete GoogleStorageControlFolderIntelligenceConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_storage_control_folder_intelligence_config#update GoogleStorageControlFolderIntelligenceConfig#update}.

---

### GoogleStorageControlFolderIntelligenceConfigTrialConfig <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigTrialConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```csharp
private GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">EffectiveEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">IntelligenceConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveEdition`<sup>Required</sup> <a name="EffectiveEdition" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```csharp
public string EffectiveEdition { get; }
```

- *Type:* string

---

##### `IntelligenceConfig`<sup>Required</sup> <a name="IntelligenceConfig" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```csharp
public string IntelligenceConfig { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig">GoogleStorageControlFolderIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```csharp
public string[] BucketIdRegexesInput { get; }
```

- *Type:* string[]

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput">BucketIdRegexesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketIdRegexesInput`<sup>Optional</sup> <a name="BucketIdRegexesInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexesInput"></a>

```csharp
public string[] BucketIdRegexesInput { get; }
```

- *Type:* string[]

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```csharp
public string[] BucketIdRegexes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### GoogleStorageControlFolderIntelligenceConfigFilterOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets">PutExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations">PutExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets">PutIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations">PutIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets">ResetExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations">ResetExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets">ResetIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations">ResetIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludedCloudStorageBuckets` <a name="PutExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets"></a>

```csharp
private void PutExcludedCloudStorageBuckets(GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `PutExcludedCloudStorageLocations` <a name="PutExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations"></a>

```csharp
private void PutExcludedCloudStorageLocations(GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putExcludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `PutIncludedCloudStorageBuckets` <a name="PutIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets"></a>

```csharp
private void PutIncludedCloudStorageBuckets(GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageBuckets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `PutIncludedCloudStorageLocations` <a name="PutIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations"></a>

```csharp
private void PutIncludedCloudStorageLocations(GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.putIncludedCloudStorageLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `ResetExcludedCloudStorageBuckets` <a name="ResetExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageBuckets"></a>

```csharp
private void ResetExcludedCloudStorageBuckets()
```

##### `ResetExcludedCloudStorageLocations` <a name="ResetExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetExcludedCloudStorageLocations"></a>

```csharp
private void ResetExcludedCloudStorageLocations()
```

##### `ResetIncludedCloudStorageBuckets` <a name="ResetIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageBuckets"></a>

```csharp
private void ResetIncludedCloudStorageBuckets()
```

##### `ResetIncludedCloudStorageLocations` <a name="ResetIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.resetIncludedCloudStorageLocations"></a>

```csharp
private void ResetIncludedCloudStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput">ExcludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput">ExcludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput">IncludedCloudStorageBucketsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput">IncludedCloudStorageLocationsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludedCloudStorageBuckets`<sup>Required</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference ExcludedCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference</a>

---

##### `ExcludedCloudStorageLocations`<sup>Required</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference ExcludedCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference</a>

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference IncludedCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference</a>

---

##### `IncludedCloudStorageLocations`<sup>Required</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference IncludedCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference</a>

---

##### `ExcludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBucketsInput"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets ExcludedCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---

##### `ExcludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="ExcludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocationsInput"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations ExcludedCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---

##### `IncludedCloudStorageBucketsInput`<sup>Optional</sup> <a name="IncludedCloudStorageBucketsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageBucketsInput"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets IncludedCloudStorageBucketsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---

##### `IncludedCloudStorageLocationsInput`<sup>Optional</sup> <a name="IncludedCloudStorageLocationsInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocationsInput"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations IncludedCloudStorageLocationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations">GoogleStorageControlFolderIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigFilter">GoogleStorageControlFolderIntelligenceConfigFilter</a>

---


### GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleStorageControlFolderIntelligenceConfigTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTimeouts">GoogleStorageControlFolderIntelligenceConfigTimeouts</a>

---


### GoogleStorageControlFolderIntelligenceConfigTrialConfigList <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigTrialConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get"></a>

```csharp
private GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference <a name="GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig">GoogleStorageControlFolderIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleStorageControlFolderIntelligenceConfigTrialConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleStorageControlFolderIntelligenceConfig.GoogleStorageControlFolderIntelligenceConfigTrialConfig">GoogleStorageControlFolderIntelligenceConfigTrialConfig</a>

---



