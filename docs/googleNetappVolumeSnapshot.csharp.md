# `googleNetappVolumeSnapshot` Submodule <a name="`googleNetappVolumeSnapshot` Submodule" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolumeSnapshot <a name="GoogleNetappVolumeSnapshot" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot google_netapp_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshot(Construct Scope, string Id, GoogleNetappVolumeSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig">GoogleNetappVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig">GoogleNetappVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNetappVolumeSnapshotTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts">GoogleNetappVolumeSnapshotTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNetappVolumeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNetappVolumeSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNetappVolumeSnapshot resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetappVolumeSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetappVolumeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolumeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference">GoogleNetappVolumeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.usedBytes">UsedBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.volumeNameInput">VolumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.timeouts"></a>

```csharp
public GoogleNetappVolumeSnapshotTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference">GoogleNetappVolumeSnapshotTimeoutsOutputReference</a>

---

##### `UsedBytes`<sup>Required</sup> <a name="UsedBytes" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.usedBytes"></a>

```csharp
public double UsedBytes { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.volumeNameInput"></a>

```csharp
public string VolumeNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeSnapshotConfig <a name="GoogleNetappVolumeSnapshotConfig" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string VolumeName,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNetappVolumeSnapshotTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.location">Location</a></code> | <code>string</code> | Name of the snapshot location. Snapshots are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.name">Name</a></code> | <code>string</code> | The name of the snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.volumeName">VolumeName</a></code> | <code>string</code> | The name of the volume to create the snapshot in. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.description">Description</a></code> | <code>string</code> | Description for the snapshot. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#id GoogleNetappVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#project GoogleNetappVolumeSnapshot#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts">GoogleNetappVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Name of the snapshot location. Snapshots are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#location GoogleNetappVolumeSnapshot#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#name GoogleNetappVolumeSnapshot#name}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.volumeName"></a>

```csharp
public string VolumeName { get; set; }
```

- *Type:* string

The name of the volume to create the snapshot in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#volume_name GoogleNetappVolumeSnapshot#volume_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description for the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#description GoogleNetappVolumeSnapshot#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#id GoogleNetappVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#labels GoogleNetappVolumeSnapshot#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#project GoogleNetappVolumeSnapshot#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotConfig.property.timeouts"></a>

```csharp
public GoogleNetappVolumeSnapshotTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts">GoogleNetappVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#timeouts GoogleNetappVolumeSnapshot#timeouts}

---

### GoogleNetappVolumeSnapshotTimeouts <a name="GoogleNetappVolumeSnapshotTimeouts" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#create GoogleNetappVolumeSnapshot#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#delete GoogleNetappVolumeSnapshot#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#update GoogleNetappVolumeSnapshot#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#create GoogleNetappVolumeSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#delete GoogleNetappVolumeSnapshot#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_netapp_volume_snapshot#update GoogleNetappVolumeSnapshot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeSnapshotTimeoutsOutputReference <a name="GoogleNetappVolumeSnapshotTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNetappVolumeSnapshotTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNetappVolumeSnapshot.GoogleNetappVolumeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



