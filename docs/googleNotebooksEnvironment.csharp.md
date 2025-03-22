# `googleNotebooksEnvironment` Submodule <a name="`googleNotebooksEnvironment` Submodule" id="@cdktf/provider-google-beta.googleNotebooksEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksEnvironment <a name="GoogleNotebooksEnvironment" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment google_notebooks_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironment(Construct Scope, string Id, GoogleNotebooksEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig">GoogleNotebooksEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig">GoogleNotebooksEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage">PutVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetVmImage">ResetVmImage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putContainerImage"></a>

```csharp
private void PutContainerImage(GoogleNotebooksEnvironmentContainerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNotebooksEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>

---

##### `PutVmImage` <a name="PutVmImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage"></a>

```csharp
private void PutVmImage(GoogleNotebooksEnvironmentVmImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

---

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetPostStartupScript"></a>

```csharp
private void ResetPostStartupScript()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVmImage` <a name="ResetVmImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.resetVmImage"></a>

```csharp
private void ResetVmImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNotebooksEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNotebooksEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNotebooksEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNotebooksEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference">GoogleNotebooksEnvironmentContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference">GoogleNotebooksEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference">GoogleNotebooksEnvironmentVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImageInput">VmImageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImage"></a>

```csharp
public GoogleNotebooksEnvironmentContainerImageOutputReference ContainerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference">GoogleNotebooksEnvironmentContainerImageOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeouts"></a>

```csharp
public GoogleNotebooksEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference">GoogleNotebooksEnvironmentTimeoutsOutputReference</a>

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImage"></a>

```csharp
public GoogleNotebooksEnvironmentVmImageOutputReference VmImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference">GoogleNotebooksEnvironmentVmImageOutputReference</a>

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.containerImageInput"></a>

```csharp
public GoogleNotebooksEnvironmentContainerImage ContainerImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScriptInput"></a>

```csharp
public string PostStartupScriptInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmImageInput`<sup>Optional</sup> <a name="VmImageInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.vmImageInput"></a>

```csharp
public GoogleNotebooksEnvironmentVmImage VmImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksEnvironmentConfig <a name="GoogleNotebooksEnvironmentConfig" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    GoogleNotebooksEnvironmentContainerImage ContainerImage = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string PostStartupScript = null,
    string Project = null,
    GoogleNotebooksEnvironmentTimeouts Timeouts = null,
    GoogleNotebooksEnvironmentVmImage VmImage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | A brief description of this environment. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of this environment for the UI. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#id GoogleNotebooksEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a></code> | vm_image block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#location GoogleNotebooksEnvironment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name specified for the Environment instance. Format: projects/{project_id}/locations/{location}/environments/{environmentId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#name GoogleNotebooksEnvironment#name}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.containerImage"></a>

```csharp
public GoogleNotebooksEnvironmentContainerImage ContainerImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#container_image GoogleNotebooksEnvironment#container_image}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A brief description of this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#description GoogleNotebooksEnvironment#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of this environment for the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#display_name GoogleNotebooksEnvironment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#id GoogleNotebooksEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; set; }
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or Cloud Storage path. Example: "gs://path-to-file/file-name"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#post_startup_script GoogleNotebooksEnvironment#post_startup_script}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.timeouts"></a>

```csharp
public GoogleNotebooksEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts">GoogleNotebooksEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#timeouts GoogleNotebooksEnvironment#timeouts}

---

##### `VmImage`<sup>Optional</sup> <a name="VmImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentConfig.property.vmImage"></a>

```csharp
public GoogleNotebooksEnvironmentVmImage VmImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#vm_image GoogleNotebooksEnvironment#vm_image}

---

### GoogleNotebooksEnvironmentContainerImage <a name="GoogleNotebooksEnvironmentContainerImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironmentContainerImage {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#repository GoogleNotebooksEnvironment#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#tag GoogleNotebooksEnvironment#tag}

---

### GoogleNotebooksEnvironmentTimeouts <a name="GoogleNotebooksEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#create GoogleNotebooksEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#delete GoogleNotebooksEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#update GoogleNotebooksEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#create GoogleNotebooksEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#delete GoogleNotebooksEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#update GoogleNotebooksEnvironment#update}.

---

### GoogleNotebooksEnvironmentVmImage <a name="GoogleNotebooksEnvironmentVmImage" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironmentVmImage {
    string Project,
    string ImageFamily = null,
    string ImageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.project">Project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageFamily">ImageFamily</a></code> | <code>string</code> | Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageName">ImageName</a></code> | <code>string</code> | Use VM image name to find the image. |

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: projects/{project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#project GoogleNotebooksEnvironment#project}

---

##### `ImageFamily`<sup>Optional</sup> <a name="ImageFamily" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageFamily"></a>

```csharp
public string ImageFamily { get; set; }
```

- *Type:* string

Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#image_family GoogleNotebooksEnvironment#image_family}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_notebooks_environment#image_name GoogleNotebooksEnvironment#image_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNotebooksEnvironmentContainerImageOutputReference <a name="GoogleNotebooksEnvironmentContainerImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironmentContainerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImageOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksEnvironmentContainerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentContainerImage">GoogleNotebooksEnvironmentContainerImage</a>

---


### GoogleNotebooksEnvironmentTimeoutsOutputReference <a name="GoogleNotebooksEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNotebooksEnvironmentVmImageOutputReference <a name="GoogleNotebooksEnvironmentVmImageOutputReference" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksEnvironmentVmImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageFamily">ResetImageFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageFamily` <a name="ResetImageFamily" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageFamily"></a>

```csharp
private void ResetImageFamily()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.resetImageName"></a>

```csharp
private void ResetImageName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput">ImageFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamily">ImageFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImageFamilyInput`<sup>Optional</sup> <a name="ImageFamilyInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamilyInput"></a>

```csharp
public string ImageFamilyInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ImageFamily`<sup>Required</sup> <a name="ImageFamily" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageFamily"></a>

```csharp
public string ImageFamily { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImageOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksEnvironmentVmImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksEnvironment.GoogleNotebooksEnvironmentVmImage">GoogleNotebooksEnvironmentVmImage</a>

---



