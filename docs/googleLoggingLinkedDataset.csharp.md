# `googleLoggingLinkedDataset` Submodule <a name="`googleLoggingLinkedDataset` Submodule" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingLinkedDataset <a name="GoogleLoggingLinkedDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset google_logging_linked_dataset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingLinkedDataset(Construct Scope, string Id, GoogleLoggingLinkedDatasetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig">GoogleLoggingLinkedDatasetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig">GoogleLoggingLinkedDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putBigqueryDataset">PutBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetBigqueryDataset">ResetBigqueryDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigqueryDataset` <a name="PutBigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putBigqueryDataset"></a>

```csharp
private void PutBigqueryDataset(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putBigqueryDataset.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleLoggingLinkedDatasetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a>

---

##### `ResetBigqueryDataset` <a name="ResetBigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetBigqueryDataset"></a>

```csharp
private void ResetBigqueryDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleLoggingLinkedDataset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingLinkedDataset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingLinkedDataset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingLinkedDataset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleLoggingLinkedDataset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleLoggingLinkedDataset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleLoggingLinkedDataset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleLoggingLinkedDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingLinkedDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDataset">BigqueryDataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList">GoogleLoggingLinkedDatasetBigqueryDatasetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference">GoogleLoggingLinkedDatasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDatasetInput">BigqueryDatasetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkIdInput">LinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkId">LinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BigqueryDataset`<sup>Required</sup> <a name="BigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDataset"></a>

```csharp
public GoogleLoggingLinkedDatasetBigqueryDatasetList BigqueryDataset { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList">GoogleLoggingLinkedDatasetBigqueryDatasetList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeouts"></a>

```csharp
public GoogleLoggingLinkedDatasetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference">GoogleLoggingLinkedDatasetTimeoutsOutputReference</a>

---

##### `BigqueryDatasetInput`<sup>Optional</sup> <a name="BigqueryDatasetInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bigqueryDatasetInput"></a>

```csharp
public object BigqueryDatasetInput { get; }
```

- *Type:* object

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinkIdInput`<sup>Optional</sup> <a name="LinkIdInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkIdInput"></a>

```csharp
public string LinkIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.linkId"></a>

```csharp
public string LinkId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDataset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingLinkedDatasetBigqueryDataset <a name="GoogleLoggingLinkedDatasetBigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingLinkedDatasetBigqueryDataset {

};
```


### GoogleLoggingLinkedDatasetConfig <a name="GoogleLoggingLinkedDatasetConfig" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingLinkedDatasetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string LinkId,
    object BigqueryDataset = null,
    string Description = null,
    string Id = null,
    string Location = null,
    string Parent = null,
    GoogleLoggingLinkedDatasetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bucket">Bucket</a></code> | <code>string</code> | The bucket to which the linked dataset is attached. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.linkId">LinkId</a></code> | <code>string</code> | The id of the linked dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bigqueryDataset">BigqueryDataset</a></code> | <code>object</code> | bigquery_dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.description">Description</a></code> | <code>string</code> | Describes this link. The maximum length of the description is 8000 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#id GoogleLoggingLinkedDataset#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.location">Location</a></code> | <code>string</code> | The location of the linked dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the linked dataset. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The bucket to which the linked dataset is attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#bucket GoogleLoggingLinkedDataset#bucket}

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.linkId"></a>

```csharp
public string LinkId { get; set; }
```

- *Type:* string

The id of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#link_id GoogleLoggingLinkedDataset#link_id}

---

##### `BigqueryDataset`<sup>Optional</sup> <a name="BigqueryDataset" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.bigqueryDataset"></a>

```csharp
public object BigqueryDataset { get; set; }
```

- *Type:* object

bigquery_dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#bigquery_dataset GoogleLoggingLinkedDataset#bigquery_dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Describes this link. The maximum length of the description is 8000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#description GoogleLoggingLinkedDataset#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#id GoogleLoggingLinkedDataset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#location GoogleLoggingLinkedDataset#location}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the linked dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#parent GoogleLoggingLinkedDataset#parent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetConfig.property.timeouts"></a>

```csharp
public GoogleLoggingLinkedDatasetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts">GoogleLoggingLinkedDatasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#timeouts GoogleLoggingLinkedDataset#timeouts}

---

### GoogleLoggingLinkedDatasetTimeouts <a name="GoogleLoggingLinkedDatasetTimeouts" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingLinkedDatasetTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#create GoogleLoggingLinkedDataset#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#delete GoogleLoggingLinkedDataset#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#create GoogleLoggingLinkedDataset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_logging_linked_dataset#delete GoogleLoggingLinkedDataset#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingLinkedDatasetBigqueryDatasetList <a name="GoogleLoggingLinkedDatasetBigqueryDatasetList" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingLinkedDatasetBigqueryDatasetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.get"></a>

```csharp
private GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference <a name="GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId">DatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.datasetId"></a>

```csharp
public string DatasetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetBigqueryDatasetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleLoggingLinkedDatasetTimeoutsOutputReference <a name="GoogleLoggingLinkedDatasetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleLoggingLinkedDatasetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleLoggingLinkedDataset.GoogleLoggingLinkedDatasetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



