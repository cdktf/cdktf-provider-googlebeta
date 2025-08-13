# `googleComputePreviewFeature` Submodule <a name="`googleComputePreviewFeature` Submodule" id="@cdktf/provider-google-beta.googleComputePreviewFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputePreviewFeature <a name="GoogleComputePreviewFeature" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature google_compute_preview_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeature(Construct Scope, string Id, GoogleComputePreviewFeatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig">GoogleComputePreviewFeatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig">GoogleComputePreviewFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation">PutRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetRolloutOperation">ResetRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRolloutOperation` <a name="PutRolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation"></a>

```csharp
private void PutRolloutOperation(GoogleComputePreviewFeatureRolloutOperation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putRolloutOperation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleComputePreviewFeatureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRolloutOperation` <a name="ResetRolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetRolloutOperation"></a>

```csharp
private void ResetRolloutOperation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputePreviewFeature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePreviewFeature.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePreviewFeature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePreviewFeature.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleComputePreviewFeature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleComputePreviewFeature resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputePreviewFeature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputePreviewFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputePreviewFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference">GoogleComputePreviewFeatureRolloutOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference">GoogleComputePreviewFeatureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatusInput">ActivationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperationInput">RolloutOperationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatus">ActivationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `RolloutOperation`<sup>Required</sup> <a name="RolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperation"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperationOutputReference RolloutOperation { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference">GoogleComputePreviewFeatureRolloutOperationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeouts"></a>

```csharp
public GoogleComputePreviewFeatureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference">GoogleComputePreviewFeatureTimeoutsOutputReference</a>

---

##### `ActivationStatusInput`<sup>Optional</sup> <a name="ActivationStatusInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatusInput"></a>

```csharp
public string ActivationStatusInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolloutOperationInput`<sup>Optional</sup> <a name="RolloutOperationInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.rolloutOperationInput"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperation RolloutOperationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.activationStatus"></a>

```csharp
public string ActivationStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputePreviewFeatureConfig <a name="GoogleComputePreviewFeatureConfig" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeatureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ActivationStatus,
    string Name,
    string Id = null,
    string Project = null,
    GoogleComputePreviewFeatureRolloutOperation RolloutOperation = null,
    GoogleComputePreviewFeatureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.activationStatus">ActivationStatus</a></code> | <code>string</code> | The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.name">Name</a></code> | <code>string</code> | The name of the preview feature. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.rolloutOperation">RolloutOperation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | rollout_operation block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActivationStatus`<sup>Required</sup> <a name="ActivationStatus" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.activationStatus"></a>

```csharp
public string ActivationStatus { get; set; }
```

- *Type:* string

The activation status of the preview feature. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#activation_status GoogleComputePreviewFeature#activation_status}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the preview feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#name GoogleComputePreviewFeature#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#id GoogleComputePreviewFeature#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#project GoogleComputePreviewFeature#project}.

---

##### `RolloutOperation`<sup>Optional</sup> <a name="RolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.rolloutOperation"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperation RolloutOperation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

rollout_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#rollout_operation GoogleComputePreviewFeature#rollout_operation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureConfig.property.timeouts"></a>

```csharp
public GoogleComputePreviewFeatureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts">GoogleComputePreviewFeatureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#timeouts GoogleComputePreviewFeature#timeouts}

---

### GoogleComputePreviewFeatureRolloutOperation <a name="GoogleComputePreviewFeatureRolloutOperation" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeatureRolloutOperation {
    GoogleComputePreviewFeatureRolloutOperationRolloutInput RolloutInput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | rollout_input block. |

---

##### `RolloutInput`<sup>Optional</sup> <a name="RolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation.property.rolloutInput"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperationRolloutInput RolloutInput { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

rollout_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#rollout_input GoogleComputePreviewFeature#rollout_input}

---

### GoogleComputePreviewFeatureRolloutOperationRolloutInput <a name="GoogleComputePreviewFeatureRolloutOperationRolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeatureRolloutOperationRolloutInput {
    string PredefinedRolloutPlan
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>string</code> | Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"]. |

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput.property.predefinedRolloutPlan"></a>

```csharp
public string PredefinedRolloutPlan { get; set; }
```

- *Type:* string

Predefined rollout plans. Possible values: ["ROLLOUT_PLAN_FAST_ROLLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#predefined_rollout_plan GoogleComputePreviewFeature#predefined_rollout_plan}

---

### GoogleComputePreviewFeatureTimeouts <a name="GoogleComputePreviewFeatureTimeouts" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeatureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#create GoogleComputePreviewFeature#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#delete GoogleComputePreviewFeature#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#update GoogleComputePreviewFeature#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#create GoogleComputePreviewFeature#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#delete GoogleComputePreviewFeature#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_compute_preview_feature#update GoogleComputePreviewFeature#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputePreviewFeatureRolloutOperationOutputReference <a name="GoogleComputePreviewFeatureRolloutOperationOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeatureRolloutOperationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput">PutRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput">ResetRolloutInput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutInput` <a name="PutRolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput"></a>

```csharp
private void PutRolloutInput(GoogleComputePreviewFeatureRolloutOperationRolloutInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.putRolloutInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `ResetRolloutInput` <a name="ResetRolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.resetRolloutInput"></a>

```csharp
private void ResetRolloutInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput">RolloutInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference">GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput">RolloutInputInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RolloutInput`<sup>Required</sup> <a name="RolloutInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInput"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference RolloutInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference">GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference</a>

---

##### `RolloutInputInput`<sup>Optional</sup> <a name="RolloutInputInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.rolloutInputInput"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperationRolloutInput RolloutInputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationOutputReference.property.internalValue"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperation">GoogleComputePreviewFeatureRolloutOperation</a>

---


### GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference <a name="GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput">PredefinedRolloutPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan">PredefinedRolloutPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedRolloutPlanInput`<sup>Optional</sup> <a name="PredefinedRolloutPlanInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlanInput"></a>

```csharp
public string PredefinedRolloutPlanInput { get; }
```

- *Type:* string

---

##### `PredefinedRolloutPlan`<sup>Required</sup> <a name="PredefinedRolloutPlan" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.predefinedRolloutPlan"></a>

```csharp
public string PredefinedRolloutPlan { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInputOutputReference.property.internalValue"></a>

```csharp
public GoogleComputePreviewFeatureRolloutOperationRolloutInput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureRolloutOperationRolloutInput">GoogleComputePreviewFeatureRolloutOperationRolloutInput</a>

---


### GoogleComputePreviewFeatureTimeoutsOutputReference <a name="GoogleComputePreviewFeatureTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleComputePreviewFeatureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputePreviewFeature.GoogleComputePreviewFeatureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



