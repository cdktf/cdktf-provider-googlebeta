# `googleChronicleWatchlist` Submodule <a name="`googleChronicleWatchlist` Submodule" id="@cdktf/provider-google-beta.googleChronicleWatchlist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleWatchlist <a name="GoogleChronicleWatchlist" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist google_chronicle_watchlist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlist(Construct Scope, string Id, GoogleChronicleWatchlistConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig">GoogleChronicleWatchlistConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig">GoogleChronicleWatchlistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism">PutEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences">PutWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor">ResetMultiplyingFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistId">ResetWatchlistId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences">ResetWatchlistUserPreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityPopulationMechanism` <a name="PutEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism"></a>

```csharp
private void PutEntityPopulationMechanism(GoogleChronicleWatchlistEntityPopulationMechanism Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putEntityPopulationMechanism.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleChronicleWatchlistTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

---

##### `PutWatchlistUserPreferences` <a name="PutWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences"></a>

```csharp
private void PutWatchlistUserPreferences(GoogleChronicleWatchlistWatchlistUserPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.putWatchlistUserPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMultiplyingFactor` <a name="ResetMultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetMultiplyingFactor"></a>

```csharp
private void ResetMultiplyingFactor()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWatchlistId` <a name="ResetWatchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistId"></a>

```csharp
private void ResetWatchlistId()
```

##### `ResetWatchlistUserPreferences` <a name="ResetWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.resetWatchlistUserPreferences"></a>

```csharp
private void ResetWatchlistUserPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleWatchlist.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleWatchlist.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleWatchlist.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleChronicleWatchlist.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleChronicleWatchlist resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleWatchlist to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleWatchlist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleWatchlist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount">EntityCount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput">EntityPopulationMechanismInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput">MultiplyingFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput">WatchlistIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput">WatchlistUserPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId">WatchlistId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EntityCount`<sup>Required</sup> <a name="EntityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityCount"></a>

```csharp
public GoogleChronicleWatchlistEntityCountList EntityCount { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList">GoogleChronicleWatchlistEntityCountList</a>

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanism"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanismOutputReference EntityPopulationMechanism { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeouts"></a>

```csharp
public GoogleChronicleWatchlistTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference">GoogleChronicleWatchlistTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WatchlistUserPreferences`<sup>Required</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferences"></a>

```csharp
public GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference WatchlistUserPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference">GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EntityPopulationMechanismInput`<sup>Optional</sup> <a name="EntityPopulationMechanismInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.entityPopulationMechanismInput"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanism EntityPopulationMechanismInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MultiplyingFactorInput`<sup>Optional</sup> <a name="MultiplyingFactorInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactorInput"></a>

```csharp
public double MultiplyingFactorInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WatchlistIdInput`<sup>Optional</sup> <a name="WatchlistIdInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistIdInput"></a>

```csharp
public string WatchlistIdInput { get; }
```

- *Type:* string

---

##### `WatchlistUserPreferencesInput`<sup>Optional</sup> <a name="WatchlistUserPreferencesInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistUserPreferencesInput"></a>

```csharp
public GoogleChronicleWatchlistWatchlistUserPreferences WatchlistUserPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MultiplyingFactor`<sup>Required</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.multiplyingFactor"></a>

```csharp
public double MultiplyingFactor { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WatchlistId`<sup>Required</sup> <a name="WatchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.watchlistId"></a>

```csharp
public string WatchlistId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlist.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleWatchlistConfig <a name="GoogleChronicleWatchlistConfig" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    GoogleChronicleWatchlistEntityPopulationMechanism EntityPopulationMechanism,
    string Instance,
    string Location,
    string Description = null,
    string Id = null,
    double MultiplyingFactor = null,
    string Project = null,
    GoogleChronicleWatchlistTimeouts Timeouts = null,
    string WatchlistId = null,
    GoogleChronicleWatchlistWatchlistUserPreferences WatchlistUserPreferences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148). |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism">EntityPopulationMechanism</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | entity_population_mechanism block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance">Instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description">Description</a></code> | <code>string</code> | Optional. Description of the watchlist. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor">MultiplyingFactor</a></code> | <code>double</code> | Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId">WatchlistId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences">WatchlistUserPreferences</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | watchlist_user_preferences block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Required. Display name of the watchlist. Note that it must be at least one character and less than 63 characters (https://google.aip.dev/148).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#display_name GoogleChronicleWatchlist#display_name}

---

##### `EntityPopulationMechanism`<sup>Required</sup> <a name="EntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.entityPopulationMechanism"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanism EntityPopulationMechanism { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

entity_population_mechanism block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#entity_population_mechanism GoogleChronicleWatchlist#entity_population_mechanism}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#instance GoogleChronicleWatchlist#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#location GoogleChronicleWatchlist#location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Description of the watchlist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#description GoogleChronicleWatchlist#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#id GoogleChronicleWatchlist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiplyingFactor`<sup>Optional</sup> <a name="MultiplyingFactor" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.multiplyingFactor"></a>

```csharp
public double MultiplyingFactor { get; set; }
```

- *Type:* double

Optional. Weight applied to the risk score for entities in this watchlist. The default is 1.0 if it is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#multiplying_factor GoogleChronicleWatchlist#multiplying_factor}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#project GoogleChronicleWatchlist#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.timeouts"></a>

```csharp
public GoogleChronicleWatchlistTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts">GoogleChronicleWatchlistTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#timeouts GoogleChronicleWatchlist#timeouts}

---

##### `WatchlistId`<sup>Optional</sup> <a name="WatchlistId" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistId"></a>

```csharp
public string WatchlistId { get; set; }
```

- *Type:* string

Optional.

The ID to use for the watchlist,
which will become the final component of the watchlist's resource name.
This value should be 4-63 characters, and valid characters
are /a-z-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#watchlist_id GoogleChronicleWatchlist#watchlist_id}

---

##### `WatchlistUserPreferences`<sup>Optional</sup> <a name="WatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistConfig.property.watchlistUserPreferences"></a>

```csharp
public GoogleChronicleWatchlistWatchlistUserPreferences WatchlistUserPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

watchlist_user_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#watchlist_user_preferences GoogleChronicleWatchlist#watchlist_user_preferences}

---

### GoogleChronicleWatchlistEntityCount <a name="GoogleChronicleWatchlistEntityCount" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistEntityCount {

};
```


### GoogleChronicleWatchlistEntityPopulationMechanism <a name="GoogleChronicleWatchlistEntityPopulationMechanism" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistEntityPopulationMechanism {
    GoogleChronicleWatchlistEntityPopulationMechanismManual Manual = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | manual block. |

---

##### `Manual`<sup>Optional</sup> <a name="Manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism.property.manual"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanismManual Manual { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

manual block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#manual GoogleChronicleWatchlist#manual}

---

### GoogleChronicleWatchlistEntityPopulationMechanismManual <a name="GoogleChronicleWatchlistEntityPopulationMechanismManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistEntityPopulationMechanismManual {

};
```


### GoogleChronicleWatchlistTimeouts <a name="GoogleChronicleWatchlistTimeouts" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#create GoogleChronicleWatchlist#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#delete GoogleChronicleWatchlist#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#update GoogleChronicleWatchlist#update}.

---

### GoogleChronicleWatchlistWatchlistUserPreferences <a name="GoogleChronicleWatchlistWatchlistUserPreferences" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistWatchlistUserPreferences {
    object Pinned = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned">Pinned</a></code> | <code>object</code> | Optional. Whether the watchlist is pinned on the dashboard. |

---

##### `Pinned`<sup>Optional</sup> <a name="Pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences.property.pinned"></a>

```csharp
public object Pinned { get; set; }
```

- *Type:* object

Optional. Whether the watchlist is pinned on the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_chronicle_watchlist#pinned GoogleChronicleWatchlist#pinned}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleWatchlistEntityCountList <a name="GoogleChronicleWatchlistEntityCountList" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistEntityCountList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get"></a>

```csharp
private GoogleChronicleWatchlistEntityCountOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleChronicleWatchlistEntityCountOutputReference <a name="GoogleChronicleWatchlistEntityCountOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistEntityCountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset">Asset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user">User</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Asset`<sup>Required</sup> <a name="Asset" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.asset"></a>

```csharp
public double Asset { get; }
```

- *Type:* double

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.user"></a>

```csharp
public double User { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCountOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleWatchlistEntityCount InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityCount">GoogleChronicleWatchlistEntityCount</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanismManual InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---


### GoogleChronicleWatchlistEntityPopulationMechanismOutputReference <a name="GoogleChronicleWatchlistEntityPopulationMechanismOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistEntityPopulationMechanismOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual">PutManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual">ResetManual</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManual` <a name="PutManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual"></a>

```csharp
private void PutManual(GoogleChronicleWatchlistEntityPopulationMechanismManual Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.putManual.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `ResetManual` <a name="ResetManual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.resetManual"></a>

```csharp
private void ResetManual()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual">Manual</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput">ManualInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Manual`<sup>Required</sup> <a name="Manual" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manual"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference Manual { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference">GoogleChronicleWatchlistEntityPopulationMechanismManualOutputReference</a>

---

##### `ManualInput`<sup>Optional</sup> <a name="ManualInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.manualInput"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanismManual ManualInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismManual">GoogleChronicleWatchlistEntityPopulationMechanismManual</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanismOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleWatchlistEntityPopulationMechanism InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistEntityPopulationMechanism">GoogleChronicleWatchlistEntityPopulationMechanism</a>

---


### GoogleChronicleWatchlistTimeoutsOutputReference <a name="GoogleChronicleWatchlistTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference <a name="GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned">ResetPinned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinned` <a name="ResetPinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.resetPinned"></a>

```csharp
private void ResetPinned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput">PinnedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned">Pinned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PinnedInput`<sup>Optional</sup> <a name="PinnedInput" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinnedInput"></a>

```csharp
public object PinnedInput { get; }
```

- *Type:* object

---

##### `Pinned`<sup>Required</sup> <a name="Pinned" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.pinned"></a>

```csharp
public object Pinned { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferencesOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleWatchlistWatchlistUserPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleWatchlist.GoogleChronicleWatchlistWatchlistUserPreferences">GoogleChronicleWatchlistWatchlistUserPreferences</a>

---



