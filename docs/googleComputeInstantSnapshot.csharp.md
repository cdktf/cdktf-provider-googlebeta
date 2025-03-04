# `googleComputeInstantSnapshot` Submodule <a name="`googleComputeInstantSnapshot` Submodule" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInstantSnapshot <a name="GoogleComputeInstantSnapshot" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot google_compute_instant_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstantSnapshot(Construct Scope, string Id, GoogleComputeInstantSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig">GoogleComputeInstantSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig">GoogleComputeInstantSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputeInstantSnapshotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts">GoogleComputeInstantSnapshotTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeInstantSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstantSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstantSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstantSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputeInstantSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputeInstantSnapshot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeInstantSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeInstantSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeInstantSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.labelFingerprint">LabelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.sourceDiskId">SourceDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference">GoogleComputeInstantSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.sourceDiskInput">SourceDiskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.labelFingerprint"></a>

```csharp
public string LabelFingerprint { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SourceDiskId`<sup>Required</sup> <a name="SourceDiskId" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.sourceDiskId"></a>

```csharp
public string SourceDiskId { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.timeouts"></a>

```csharp
public GoogleComputeInstantSnapshotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference">GoogleComputeInstantSnapshotTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SourceDiskInput`<sup>Optional</sup> <a name="SourceDiskInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.sourceDiskInput"></a>

```csharp
public string SourceDiskInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInstantSnapshotConfig <a name="GoogleComputeInstantSnapshotConfig" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstantSnapshotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SourceDisk,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleComputeInstantSnapshotTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.sourceDisk">SourceDisk</a></code> | <code>string</code> | A reference to the disk used to create this instant snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#id GoogleComputeInstantSnapshot#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this InstantSnapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#project GoogleComputeInstantSnapshot#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts">GoogleComputeInstantSnapshotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.zone">Zone</a></code> | <code>string</code> | A reference to the zone where the disk is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#name GoogleComputeInstantSnapshot#name}

---

##### `SourceDisk`<sup>Required</sup> <a name="SourceDisk" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.sourceDisk"></a>

```csharp
public string SourceDisk { get; set; }
```

- *Type:* string

A reference to the disk used to create this instant snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#source_disk GoogleComputeInstantSnapshot#source_disk}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#description GoogleComputeInstantSnapshot#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#id GoogleComputeInstantSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this InstantSnapshot.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#labels GoogleComputeInstantSnapshot#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#project GoogleComputeInstantSnapshot#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.timeouts"></a>

```csharp
public GoogleComputeInstantSnapshotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts">GoogleComputeInstantSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#timeouts GoogleComputeInstantSnapshot#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

A reference to the zone where the disk is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#zone GoogleComputeInstantSnapshot#zone}

---

### GoogleComputeInstantSnapshotTimeouts <a name="GoogleComputeInstantSnapshotTimeouts" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstantSnapshotTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#create GoogleComputeInstantSnapshot#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#delete GoogleComputeInstantSnapshot#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#update GoogleComputeInstantSnapshot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#create GoogleComputeInstantSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#delete GoogleComputeInstantSnapshot#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_instant_snapshot#update GoogleComputeInstantSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInstantSnapshotTimeoutsOutputReference <a name="GoogleComputeInstantSnapshotTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputeInstantSnapshotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeInstantSnapshot.GoogleComputeInstantSnapshotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



