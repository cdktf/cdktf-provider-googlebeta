# `googleAccessContextManagerAccessLevels` Submodule <a name="`googleAccessContextManagerAccessLevels` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerAccessLevels <a name="GoogleAccessContextManagerAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels google_access_context_manager_access_levels}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevels(Construct Scope, string Id, GoogleAccessContextManagerAccessLevelsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig">GoogleAccessContextManagerAccessLevelsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig">GoogleAccessContextManagerAccessLevelsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels">PutAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetAccessLevels">ResetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessLevels` <a name="PutAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels"></a>

```csharp
private void PutAccessLevels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putAccessLevels.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleAccessContextManagerAccessLevelsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

---

##### `ResetAccessLevels` <a name="ResetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetAccessLevels"></a>

```csharp
private void ResetAccessLevels()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAccessLevels.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAccessLevels.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAccessLevels.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleAccessContextManagerAccessLevels.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleAccessContextManagerAccessLevels resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerAccessLevels to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerAccessLevels that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerAccessLevels to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevels">AccessLevels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList">GoogleAccessContextManagerAccessLevelsAccessLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevelsInput">AccessLevelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessLevels`<sup>Required</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevels"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsList AccessLevels { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList">GoogleAccessContextManagerAccessLevelsAccessLevelsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference">GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference</a>

---

##### `AccessLevelsInput`<sup>Optional</sup> <a name="AccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.accessLevelsInput"></a>

```csharp
public object AccessLevelsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevels.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerAccessLevelsAccessLevels <a name="GoogleAccessContextManagerAccessLevelsAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevels {
    string Name,
    string Title,
    GoogleAccessContextManagerAccessLevelsAccessLevelsBasic Basic = null,
    GoogleAccessContextManagerAccessLevelsAccessLevelsCustom Custom = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.name">Name</a></code> | <code>string</code> | Resource name for the Access Level. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.title">Title</a></code> | <code>string</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | basic block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | custom block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.description">Description</a></code> | <code>string</code> | Description of the AccessLevel and its use. Does not affect behavior. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Resource name for the Access Level.

The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#name GoogleAccessContextManagerAccessLevels#name}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#title GoogleAccessContextManagerAccessLevels#title}

---

##### `Basic`<sup>Optional</sup> <a name="Basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.basic"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasic Basic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

basic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#basic GoogleAccessContextManagerAccessLevels#basic}

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.custom"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustom Custom { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#custom GoogleAccessContextManagerAccessLevels#custom}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevels.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the AccessLevel and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#description GoogleAccessContextManagerAccessLevels#description}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasic <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasic {
    object Conditions,
    string CombiningFunction = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction">CombiningFunction</a></code> | <code>string</code> | How the conditions list should be combined to determine if a request is granted this AccessLevel. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#conditions GoogleAccessContextManagerAccessLevels#conditions}

---

##### `CombiningFunction`<sup>Optional</sup> <a name="CombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic.property.combiningFunction"></a>

```csharp
public string CombiningFunction { get; set; }
```

- *Type:* string

How the conditions list should be combined to determine if a request is granted this AccessLevel.

If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#combining_function GoogleAccessContextManagerAccessLevels#combining_function}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions {
    GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy DevicePolicy = null,
    string[] IpSubnetworks = null,
    string[] Members = null,
    object Negate = null,
    string[] Regions = null,
    string[] RequiredAccessLevels = null,
    object VpcNetworkSources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | device_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks">IpSubnetworks</a></code> | <code>string[]</code> | A list of CIDR block IP subnetwork specification. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members">Members</a></code> | <code>string[]</code> | An allowed list of members (users, service accounts). Using groups is not supported yet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate">Negate</a></code> | <code>object</code> | Whether to negate the Condition. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions">Regions</a></code> | <code>string[]</code> | The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>string[]</code> | A list of other access levels defined in the same Policy, referenced by resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code>object</code> | vpc_network_sources block. |

---

##### `DevicePolicy`<sup>Optional</sup> <a name="DevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.devicePolicy"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy DevicePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

device_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#device_policy GoogleAccessContextManagerAccessLevels#device_policy}

---

##### `IpSubnetworks`<sup>Optional</sup> <a name="IpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.ipSubnetworks"></a>

```csharp
public string[] IpSubnetworks { get; set; }
```

- *Type:* string[]

A list of CIDR block IP subnetwork specification.

May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#ip_subnetworks GoogleAccessContextManagerAccessLevels#ip_subnetworks}

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

An allowed list of members (users, service accounts). Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#members GoogleAccessContextManagerAccessLevels#members}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

Whether to negate the Condition.

If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#negate GoogleAccessContextManagerAccessLevels#negate}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

The request must originate from one of the provided countries/regions. Format: A valid ISO 3166-1 alpha-2 code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#regions GoogleAccessContextManagerAccessLevels#regions}

---

##### `RequiredAccessLevels`<sup>Optional</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.requiredAccessLevels"></a>

```csharp
public string[] RequiredAccessLevels { get; set; }
```

- *Type:* string[]

A list of other access levels defined in the same Policy, referenced by resource name.

Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#required_access_levels GoogleAccessContextManagerAccessLevels#required_access_levels}

---

##### `VpcNetworkSources`<sup>Optional</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditions.property.vpcNetworkSources"></a>

```csharp
public object VpcNetworkSources { get; set; }
```

- *Type:* object

vpc_network_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#vpc_network_sources GoogleAccessContextManagerAccessLevels#vpc_network_sources}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy {
    string[] AllowedDeviceManagementLevels = null,
    string[] AllowedEncryptionStatuses = null,
    object OsConstraints = null,
    object RequireAdminApproval = null,
    object RequireCorpOwned = null,
    object RequireScreenLock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>string[]</code> | A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>string[]</code> | A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints">OsConstraints</a></code> | <code>object</code> | os_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>object</code> | Whether the device needs to be approved by the customer admin. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>object</code> | Whether the device needs to be corp owned. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock">RequireScreenLock</a></code> | <code>object</code> | Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false. |

---

##### `AllowedDeviceManagementLevels`<sup>Optional</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedDeviceManagementLevels"></a>

```csharp
public string[] AllowedDeviceManagementLevels { get; set; }
```

- *Type:* string[]

A list of allowed device management levels. An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#allowed_device_management_levels GoogleAccessContextManagerAccessLevels#allowed_device_management_levels}

---

##### `AllowedEncryptionStatuses`<sup>Optional</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.allowedEncryptionStatuses"></a>

```csharp
public string[] AllowedEncryptionStatuses { get; set; }
```

- *Type:* string[]

A list of allowed encryptions statuses. An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#allowed_encryption_statuses GoogleAccessContextManagerAccessLevels#allowed_encryption_statuses}

---

##### `OsConstraints`<sup>Optional</sup> <a name="OsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.osConstraints"></a>

```csharp
public object OsConstraints { get; set; }
```

- *Type:* object

os_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#os_constraints GoogleAccessContextManagerAccessLevels#os_constraints}

---

##### `RequireAdminApproval`<sup>Optional</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireAdminApproval"></a>

```csharp
public object RequireAdminApproval { get; set; }
```

- *Type:* object

Whether the device needs to be approved by the customer admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#require_admin_approval GoogleAccessContextManagerAccessLevels#require_admin_approval}

---

##### `RequireCorpOwned`<sup>Optional</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireCorpOwned"></a>

```csharp
public object RequireCorpOwned { get; set; }
```

- *Type:* object

Whether the device needs to be corp owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#require_corp_owned GoogleAccessContextManagerAccessLevels#require_corp_owned}

---

##### `RequireScreenLock`<sup>Optional</sup> <a name="RequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy.property.requireScreenLock"></a>

```csharp
public object RequireScreenLock { get; set; }
```

- *Type:* object

Whether or not screenlock is required for the DevicePolicy to be true. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#require_screen_lock GoogleAccessContextManagerAccessLevels#require_screen_lock}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints {
    string OsType,
    string MinimumVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType">OsType</a></code> | <code>string</code> | The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | The minimum allowed OS version. |

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.osType"></a>

```csharp
public string OsType { get; set; }
```

- *Type:* string

The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#os_type GoogleAccessContextManagerAccessLevels#os_type}

---

##### `MinimumVersion`<sup>Optional</sup> <a name="MinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; set; }
```

- *Type:* string

The minimum allowed OS version.

If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#minimum_version GoogleAccessContextManagerAccessLevels#minimum_version}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources {
    GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork VpcSubnetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork">VpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | vpc_subnetwork block. |

---

##### `VpcSubnetwork`<sup>Optional</sup> <a name="VpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSources.property.vpcSubnetwork"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork VpcSubnetwork { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

vpc_subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#vpc_subnetwork GoogleAccessContextManagerAccessLevels#vpc_subnetwork}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork {
    string Network,
    string[] VpcIpSubnetworks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network">Network</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks">VpcIpSubnetworks</a></code> | <code>string[]</code> | CIDR block IP subnetwork specification. Must be IPv4. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Required.

Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#network GoogleAccessContextManagerAccessLevels#network}

---

##### `VpcIpSubnetworks`<sup>Optional</sup> <a name="VpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork.property.vpcIpSubnetworks"></a>

```csharp
public string[] VpcIpSubnetworks { get; set; }
```

- *Type:* string[]

CIDR block IP subnetwork specification. Must be IPv4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#vpc_ip_subnetworks GoogleAccessContextManagerAccessLevels#vpc_ip_subnetworks}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsCustom <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsCustom {
    GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr Expr
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | expr block. |

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom.property.expr"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr Expr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#expr GoogleAccessContextManagerAccessLevels#expr}

---

### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#expression GoogleAccessContextManagerAccessLevels#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#description GoogleAccessContextManagerAccessLevels#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#location GoogleAccessContextManagerAccessLevels#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#title GoogleAccessContextManagerAccessLevels#title}

---

### GoogleAccessContextManagerAccessLevelsConfig <a name="GoogleAccessContextManagerAccessLevelsConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Parent,
    object AccessLevels = null,
    string Id = null,
    GoogleAccessContextManagerAccessLevelsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.parent">Parent</a></code> | <code>string</code> | The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.accessLevels">AccessLevels</a></code> | <code>object</code> | access_levels block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The AccessPolicy this AccessLevel lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#parent GoogleAccessContextManagerAccessLevels#parent}

---

##### `AccessLevels`<sup>Optional</sup> <a name="AccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.accessLevels"></a>

```csharp
public object AccessLevels { get; set; }
```

- *Type:* object

access_levels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#access_levels GoogleAccessContextManagerAccessLevels#access_levels}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#id GoogleAccessContextManagerAccessLevels#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsConfig.property.timeouts"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts">GoogleAccessContextManagerAccessLevelsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#timeouts GoogleAccessContextManagerAccessLevels#timeouts}

---

### GoogleAccessContextManagerAccessLevelsTimeouts <a name="GoogleAccessContextManagerAccessLevelsTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#create GoogleAccessContextManagerAccessLevels#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#delete GoogleAccessContextManagerAccessLevels#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#update GoogleAccessContextManagerAccessLevels#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#create GoogleAccessContextManagerAccessLevels#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#delete GoogleAccessContextManagerAccessLevels#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_access_levels#update GoogleAccessContextManagerAccessLevels#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get"></a>

```csharp
private GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion">ResetMinimumVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimumVersion` <a name="ResetMinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.resetMinimumVersion"></a>

```csharp
private void ResetMinimumVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput">MinimumVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion">MinimumVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumVersionInput`<sup>Optional</sup> <a name="MinimumVersionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersionInput"></a>

```csharp
public string MinimumVersionInput { get; }
```

- *Type:* string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osTypeInput"></a>

```csharp
public string OsTypeInput { get; }
```

- *Type:* string

---

##### `MinimumVersion`<sup>Required</sup> <a name="MinimumVersion" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.minimumVersion"></a>

```csharp
public string MinimumVersion { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints">PutOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels">ResetAllowedDeviceManagementLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses">ResetAllowedEncryptionStatuses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints">ResetOsConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval">ResetRequireAdminApproval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned">ResetRequireCorpOwned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock">ResetRequireScreenLock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOsConstraints` <a name="PutOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints"></a>

```csharp
private void PutOsConstraints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.putOsConstraints.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedDeviceManagementLevels` <a name="ResetAllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedDeviceManagementLevels"></a>

```csharp
private void ResetAllowedDeviceManagementLevels()
```

##### `ResetAllowedEncryptionStatuses` <a name="ResetAllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetAllowedEncryptionStatuses"></a>

```csharp
private void ResetAllowedEncryptionStatuses()
```

##### `ResetOsConstraints` <a name="ResetOsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetOsConstraints"></a>

```csharp
private void ResetOsConstraints()
```

##### `ResetRequireAdminApproval` <a name="ResetRequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireAdminApproval"></a>

```csharp
private void ResetRequireAdminApproval()
```

##### `ResetRequireCorpOwned` <a name="ResetRequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireCorpOwned"></a>

```csharp
private void ResetRequireCorpOwned()
```

##### `ResetRequireScreenLock` <a name="ResetRequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.resetRequireScreenLock"></a>

```csharp
private void ResetRequireScreenLock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints">OsConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput">AllowedDeviceManagementLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput">AllowedEncryptionStatusesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput">OsConstraintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput">RequireAdminApprovalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput">RequireCorpOwnedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput">RequireScreenLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels">AllowedDeviceManagementLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses">AllowedEncryptionStatuses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval">RequireAdminApproval</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned">RequireCorpOwned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock">RequireScreenLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OsConstraints`<sup>Required</sup> <a name="OsConstraints" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraints"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList OsConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList</a>

---

##### `AllowedDeviceManagementLevelsInput`<sup>Optional</sup> <a name="AllowedDeviceManagementLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevelsInput"></a>

```csharp
public string[] AllowedDeviceManagementLevelsInput { get; }
```

- *Type:* string[]

---

##### `AllowedEncryptionStatusesInput`<sup>Optional</sup> <a name="AllowedEncryptionStatusesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatusesInput"></a>

```csharp
public string[] AllowedEncryptionStatusesInput { get; }
```

- *Type:* string[]

---

##### `OsConstraintsInput`<sup>Optional</sup> <a name="OsConstraintsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.osConstraintsInput"></a>

```csharp
public object OsConstraintsInput { get; }
```

- *Type:* object

---

##### `RequireAdminApprovalInput`<sup>Optional</sup> <a name="RequireAdminApprovalInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApprovalInput"></a>

```csharp
public object RequireAdminApprovalInput { get; }
```

- *Type:* object

---

##### `RequireCorpOwnedInput`<sup>Optional</sup> <a name="RequireCorpOwnedInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwnedInput"></a>

```csharp
public object RequireCorpOwnedInput { get; }
```

- *Type:* object

---

##### `RequireScreenLockInput`<sup>Optional</sup> <a name="RequireScreenLockInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLockInput"></a>

```csharp
public object RequireScreenLockInput { get; }
```

- *Type:* object

---

##### `AllowedDeviceManagementLevels`<sup>Required</sup> <a name="AllowedDeviceManagementLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedDeviceManagementLevels"></a>

```csharp
public string[] AllowedDeviceManagementLevels { get; }
```

- *Type:* string[]

---

##### `AllowedEncryptionStatuses`<sup>Required</sup> <a name="AllowedEncryptionStatuses" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.allowedEncryptionStatuses"></a>

```csharp
public string[] AllowedEncryptionStatuses { get; }
```

- *Type:* string[]

---

##### `RequireAdminApproval`<sup>Required</sup> <a name="RequireAdminApproval" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireAdminApproval"></a>

```csharp
public object RequireAdminApproval { get; }
```

- *Type:* object

---

##### `RequireCorpOwned`<sup>Required</sup> <a name="RequireCorpOwned" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireCorpOwned"></a>

```csharp
public object RequireCorpOwned { get; }
```

- *Type:* object

---

##### `RequireScreenLock`<sup>Required</sup> <a name="RequireScreenLock" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.requireScreenLock"></a>

```csharp
public object RequireScreenLock { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get"></a>

```csharp
private GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy">PutDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources">PutVpcNetworkSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy">ResetDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks">ResetIpSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels">ResetRequiredAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources">ResetVpcNetworkSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDevicePolicy` <a name="PutDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy"></a>

```csharp
private void PutDevicePolicy(GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putDevicePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `PutVpcNetworkSources` <a name="PutVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources"></a>

```csharp
private void PutVpcNetworkSources(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.putVpcNetworkSources.parameter.value"></a>

- *Type:* object

---

##### `ResetDevicePolicy` <a name="ResetDevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetDevicePolicy"></a>

```csharp
private void ResetDevicePolicy()
```

##### `ResetIpSubnetworks` <a name="ResetIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetIpSubnetworks"></a>

```csharp
private void ResetIpSubnetworks()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetRequiredAccessLevels` <a name="ResetRequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetRequiredAccessLevels"></a>

```csharp
private void ResetRequiredAccessLevels()
```

##### `ResetVpcNetworkSources` <a name="ResetVpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.resetVpcNetworkSources"></a>

```csharp
private void ResetVpcNetworkSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy">DevicePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources">VpcNetworkSources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput">DevicePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput">IpSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput">RequiredAccessLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput">VpcNetworkSourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks">IpSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels">RequiredAccessLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DevicePolicy`<sup>Required</sup> <a name="DevicePolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicy"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference DevicePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference</a>

---

##### `VpcNetworkSources`<sup>Required</sup> <a name="VpcNetworkSources" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSources"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList VpcNetworkSources { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList</a>

---

##### `DevicePolicyInput`<sup>Optional</sup> <a name="DevicePolicyInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.devicePolicyInput"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy DevicePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy</a>

---

##### `IpSubnetworksInput`<sup>Optional</sup> <a name="IpSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworksInput"></a>

```csharp
public string[] IpSubnetworksInput { get; }
```

- *Type:* string[]

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RequiredAccessLevelsInput`<sup>Optional</sup> <a name="RequiredAccessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevelsInput"></a>

```csharp
public string[] RequiredAccessLevelsInput { get; }
```

- *Type:* string[]

---

##### `VpcNetworkSourcesInput`<sup>Optional</sup> <a name="VpcNetworkSourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.vpcNetworkSourcesInput"></a>

```csharp
public object VpcNetworkSourcesInput { get; }
```

- *Type:* object

---

##### `IpSubnetworks`<sup>Required</sup> <a name="IpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.ipSubnetworks"></a>

```csharp
public string[] IpSubnetworks { get; }
```

- *Type:* string[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RequiredAccessLevels`<sup>Required</sup> <a name="RequiredAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.requiredAccessLevels"></a>

```csharp
public string[] RequiredAccessLevels { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get"></a>

```csharp
private GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork">PutVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork">ResetVpcSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcSubnetwork` <a name="PutVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork"></a>

```csharp
private void PutVpcSubnetwork(GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.putVpcSubnetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `ResetVpcSubnetwork` <a name="ResetVpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.resetVpcSubnetwork"></a>

```csharp
private void ResetVpcSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork">VpcSubnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput">VpcSubnetworkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcSubnetwork`<sup>Required</sup> <a name="VpcSubnetwork" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetwork"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference VpcSubnetwork { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference</a>

---

##### `VpcSubnetworkInput`<sup>Optional</sup> <a name="VpcSubnetworkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.vpcSubnetworkInput"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork VpcSubnetworkInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks">ResetVpcIpSubnetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcIpSubnetworks` <a name="ResetVpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.resetVpcIpSubnetworks"></a>

```csharp
private void ResetVpcIpSubnetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput">VpcIpSubnetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks">VpcIpSubnetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `VpcIpSubnetworksInput`<sup>Optional</sup> <a name="VpcIpSubnetworksInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworksInput"></a>

```csharp
public string[] VpcIpSubnetworksInput { get; }
```

- *Type:* string[]

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `VpcIpSubnetworks`<sup>Required</sup> <a name="VpcIpSubnetworks" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.vpcIpSubnetworks"></a>

```csharp
public string[] VpcIpSubnetworks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsVpcNetworkSourcesVpcSubnetwork</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction">ResetCombiningFunction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.putConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetCombiningFunction` <a name="ResetCombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.resetCombiningFunction"></a>

```csharp
private void ResetCombiningFunction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput">CombiningFunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction">CombiningFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditions"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicConditionsList</a>

---

##### `CombiningFunctionInput`<sup>Optional</sup> <a name="CombiningFunctionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunctionInput"></a>

```csharp
public string CombiningFunctionInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `CombiningFunction`<sup>Required</sup> <a name="CombiningFunction" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.combiningFunction"></a>

```csharp
public string CombiningFunction { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr">PutExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr"></a>

```csharp
private void PutExpr(GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.expr"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference Expr { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.exprInput"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr ExprInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomExpr</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference.property.internalValue"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustom InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsList <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsList" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get"></a>

```csharp
private GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference <a name="GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic">PutBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom">PutCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic">ResetBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasic` <a name="PutBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic"></a>

```csharp
private void PutBasic(GoogleAccessContextManagerAccessLevelsAccessLevelsBasic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putBasic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `PutCustom` <a name="PutCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom"></a>

```csharp
private void PutCustom(GoogleAccessContextManagerAccessLevelsAccessLevelsCustom Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.putCustom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `ResetBasic` <a name="ResetBasic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetBasic"></a>

```csharp
private void ResetBasic()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic">Basic</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom">Custom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput">BasicInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput">CustomInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Basic`<sup>Required</sup> <a name="Basic" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basic"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference Basic { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsBasicOutputReference</a>

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.custom"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference Custom { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference">GoogleAccessContextManagerAccessLevelsAccessLevelsCustomOutputReference</a>

---

##### `BasicInput`<sup>Optional</sup> <a name="BasicInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.basicInput"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsBasic BasicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsBasic">GoogleAccessContextManagerAccessLevelsAccessLevelsBasic</a>

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.customInput"></a>

```csharp
public GoogleAccessContextManagerAccessLevelsAccessLevelsCustom CustomInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsCustom">GoogleAccessContextManagerAccessLevelsAccessLevelsCustom</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsAccessLevelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference <a name="GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerAccessLevels.GoogleAccessContextManagerAccessLevelsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



