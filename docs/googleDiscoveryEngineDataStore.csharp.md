# `googleDiscoveryEngineDataStore` Submodule <a name="`googleDiscoveryEngineDataStore` Submodule" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineDataStore <a name="GoogleDiscoveryEngineDataStore" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store google_discovery_engine_data_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataStore(Construct Scope, string Id, GoogleDiscoveryEngineDataStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig">GoogleDiscoveryEngineDataStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig">GoogleDiscoveryEngineDataStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetCreateAdvancedSiteSearch">ResetCreateAdvancedSiteSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetSolutionTypes">ResetSolutionTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDiscoveryEngineDataStoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>

---

##### `ResetCreateAdvancedSiteSearch` <a name="ResetCreateAdvancedSiteSearch" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetCreateAdvancedSiteSearch"></a>

```csharp
private void ResetCreateAdvancedSiteSearch()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSolutionTypes` <a name="ResetSolutionTypes" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetSolutionTypes"></a>

```csharp
private void ResetSolutionTypes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineDataStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineDataStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineDataStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDiscoveryEngineDataStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineDataStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineDataStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineDataStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.defaultSchemaId">DefaultSchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference">GoogleDiscoveryEngineDataStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfigInput">ContentConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearchInput">CreateAdvancedSiteSearchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreIdInput">DataStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVerticalInput">IndustryVerticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypesInput">SolutionTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfig">ContentConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearch">CreateAdvancedSiteSearch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreId">DataStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVertical">IndustryVertical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypes">SolutionTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DefaultSchemaId`<sup>Required</sup> <a name="DefaultSchemaId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.defaultSchemaId"></a>

```csharp
public string DefaultSchemaId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineDataStoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference">GoogleDiscoveryEngineDataStoreTimeoutsOutputReference</a>

---

##### `ContentConfigInput`<sup>Optional</sup> <a name="ContentConfigInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfigInput"></a>

```csharp
public string ContentConfigInput { get; }
```

- *Type:* string

---

##### `CreateAdvancedSiteSearchInput`<sup>Optional</sup> <a name="CreateAdvancedSiteSearchInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearchInput"></a>

```csharp
public object CreateAdvancedSiteSearchInput { get; }
```

- *Type:* object

---

##### `DataStoreIdInput`<sup>Optional</sup> <a name="DataStoreIdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreIdInput"></a>

```csharp
public string DataStoreIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndustryVerticalInput`<sup>Optional</sup> <a name="IndustryVerticalInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVerticalInput"></a>

```csharp
public string IndustryVerticalInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SolutionTypesInput`<sup>Optional</sup> <a name="SolutionTypesInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypesInput"></a>

```csharp
public string[] SolutionTypesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContentConfig`<sup>Required</sup> <a name="ContentConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.contentConfig"></a>

```csharp
public string ContentConfig { get; }
```

- *Type:* string

---

##### `CreateAdvancedSiteSearch`<sup>Required</sup> <a name="CreateAdvancedSiteSearch" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.createAdvancedSiteSearch"></a>

```csharp
public object CreateAdvancedSiteSearch { get; }
```

- *Type:* object

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.dataStoreId"></a>

```csharp
public string DataStoreId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndustryVertical`<sup>Required</sup> <a name="IndustryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.industryVertical"></a>

```csharp
public string IndustryVertical { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SolutionTypes`<sup>Required</sup> <a name="SolutionTypes" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.solutionTypes"></a>

```csharp
public string[] SolutionTypes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineDataStoreConfig <a name="GoogleDiscoveryEngineDataStoreConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataStoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContentConfig,
    string DataStoreId,
    string DisplayName,
    string IndustryVertical,
    string Location,
    object CreateAdvancedSiteSearch = null,
    string Id = null,
    string Project = null,
    string[] SolutionTypes = null,
    GoogleDiscoveryEngineDataStoreTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.contentConfig">ContentConfig</a></code> | <code>string</code> | The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dataStoreId">DataStoreId</a></code> | <code>string</code> | The unique id of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the data store. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.industryVertical">IndustryVertical</a></code> | <code>string</code> | The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch">CreateAdvancedSiteSearch</a></code> | <code>object</code> | If true, an advanced data store for site search will be created. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.solutionTypes">SolutionTypes</a></code> | <code>string[]</code> | The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContentConfig`<sup>Required</sup> <a name="ContentConfig" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.contentConfig"></a>

```csharp
public string ContentConfig { get; set; }
```

- *Type:* string

The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#content_config GoogleDiscoveryEngineDataStore#content_config}

---

##### `DataStoreId`<sup>Required</sup> <a name="DataStoreId" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.dataStoreId"></a>

```csharp
public string DataStoreId { get; set; }
```

- *Type:* string

The unique id of the data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#data_store_id GoogleDiscoveryEngineDataStore#data_store_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the data store.

This field must be a UTF-8 encoded
string with a length limit of 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#display_name GoogleDiscoveryEngineDataStore#display_name}

---

##### `IndustryVertical`<sup>Required</sup> <a name="IndustryVertical" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.industryVertical"></a>

```csharp
public string IndustryVertical { get; set; }
```

- *Type:* string

The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#industry_vertical GoogleDiscoveryEngineDataStore#industry_vertical}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#location GoogleDiscoveryEngineDataStore#location}

---

##### `CreateAdvancedSiteSearch`<sup>Optional</sup> <a name="CreateAdvancedSiteSearch" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.createAdvancedSiteSearch"></a>

```csharp
public object CreateAdvancedSiteSearch { get; set; }
```

- *Type:* object

If true, an advanced data store for site search will be created.

If the
data store is not configured as site search (GENERIC vertical and
PUBLIC_WEBSITE contentConfig), this flag will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#create_advanced_site_search GoogleDiscoveryEngineDataStore#create_advanced_site_search}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}.

---

##### `SolutionTypes`<sup>Optional</sup> <a name="SolutionTypes" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.solutionTypes"></a>

```csharp
public string[] SolutionTypes { get; set; }
```

- *Type:* string[]

The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#solution_types GoogleDiscoveryEngineDataStore#solution_types}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineDataStoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts">GoogleDiscoveryEngineDataStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#timeouts GoogleDiscoveryEngineDataStore#timeouts}

---

### GoogleDiscoveryEngineDataStoreTimeouts <a name="GoogleDiscoveryEngineDataStoreTimeouts" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataStoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#create GoogleDiscoveryEngineDataStore#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#delete GoogleDiscoveryEngineDataStore#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#update GoogleDiscoveryEngineDataStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#create GoogleDiscoveryEngineDataStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#delete GoogleDiscoveryEngineDataStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.14.0/docs/resources/google_discovery_engine_data_store#update GoogleDiscoveryEngineDataStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineDataStoreTimeoutsOutputReference <a name="GoogleDiscoveryEngineDataStoreTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataStoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDiscoveryEngineDataStore.GoogleDiscoveryEngineDataStoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



