# `googleNotebooksRuntime` Submodule <a name="`googleNotebooksRuntime` Submodule" id="@cdktf/provider-google-beta.googleNotebooksRuntime"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNotebooksRuntime <a name="GoogleNotebooksRuntime" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime google_notebooks_runtime}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntime(Construct Scope, string Id, GoogleNotebooksRuntimeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig">GoogleNotebooksRuntimeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig">GoogleNotebooksRuntimeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putAccessConfig">PutAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig">PutSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putVirtualMachine">PutVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetAccessConfig">ResetAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetSoftwareConfig">ResetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetVirtualMachine">ResetVirtualMachine</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfig` <a name="PutAccessConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putAccessConfig"></a>

```csharp
private void PutAccessConfig(GoogleNotebooksRuntimeAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

---

##### `PutSoftwareConfig` <a name="PutSoftwareConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig"></a>

```csharp
private void PutSoftwareConfig(GoogleNotebooksRuntimeSoftwareConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleNotebooksRuntimeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>

---

##### `PutVirtualMachine` <a name="PutVirtualMachine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putVirtualMachine"></a>

```csharp
private void PutVirtualMachine(GoogleNotebooksRuntimeVirtualMachine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.putVirtualMachine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

---

##### `ResetAccessConfig` <a name="ResetAccessConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetAccessConfig"></a>

```csharp
private void ResetAccessConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSoftwareConfig` <a name="ResetSoftwareConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetSoftwareConfig"></a>

```csharp
private void ResetSoftwareConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualMachine` <a name="ResetVirtualMachine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.resetVirtualMachine"></a>

```csharp
private void ResetVirtualMachine()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleNotebooksRuntime resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksRuntime.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksRuntime.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksRuntime.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleNotebooksRuntime.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleNotebooksRuntime resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNotebooksRuntime to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNotebooksRuntime that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNotebooksRuntime to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference">GoogleNotebooksRuntimeAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.healthState">HealthState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.metrics">Metrics</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList">GoogleNotebooksRuntimeMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference">GoogleNotebooksRuntimeSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference">GoogleNotebooksRuntimeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference">GoogleNotebooksRuntimeVirtualMachineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfigInput">AccessConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfigInput">SoftwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachineInput">VirtualMachineInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfig"></a>

```csharp
public GoogleNotebooksRuntimeAccessConfigOutputReference AccessConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference">GoogleNotebooksRuntimeAccessConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HealthState`<sup>Required</sup> <a name="HealthState" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.healthState"></a>

```csharp
public string HealthState { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.metrics"></a>

```csharp
public GoogleNotebooksRuntimeMetricsList Metrics { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList">GoogleNotebooksRuntimeMetricsList</a>

---

##### `SoftwareConfig`<sup>Required</sup> <a name="SoftwareConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfig"></a>

```csharp
public GoogleNotebooksRuntimeSoftwareConfigOutputReference SoftwareConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference">GoogleNotebooksRuntimeSoftwareConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeouts"></a>

```csharp
public GoogleNotebooksRuntimeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference">GoogleNotebooksRuntimeTimeoutsOutputReference</a>

---

##### `VirtualMachine`<sup>Required</sup> <a name="VirtualMachine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachine"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineOutputReference VirtualMachine { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference">GoogleNotebooksRuntimeVirtualMachineOutputReference</a>

---

##### `AccessConfigInput`<sup>Optional</sup> <a name="AccessConfigInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.accessConfigInput"></a>

```csharp
public GoogleNotebooksRuntimeAccessConfig AccessConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SoftwareConfigInput`<sup>Optional</sup> <a name="SoftwareConfigInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.softwareConfigInput"></a>

```csharp
public GoogleNotebooksRuntimeSoftwareConfig SoftwareConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualMachineInput`<sup>Optional</sup> <a name="VirtualMachineInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.virtualMachineInput"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachine VirtualMachineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntime.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNotebooksRuntimeAccessConfig <a name="GoogleNotebooksRuntimeAccessConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeAccessConfig {
    string AccessType = null,
    string RuntimeOwner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.accessType">AccessType</a></code> | <code>string</code> | The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.runtimeOwner">RuntimeOwner</a></code> | <code>string</code> | The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

The type of access mode this instance. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#RuntimeAccessType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#access_type GoogleNotebooksRuntime#access_type}

---

##### `RuntimeOwner`<sup>Optional</sup> <a name="RuntimeOwner" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig.property.runtimeOwner"></a>

```csharp
public string RuntimeOwner { get; set; }
```

- *Type:* string

The owner of this runtime after creation. Format: 'alias@example.com'. Currently supports one owner only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#runtime_owner GoogleNotebooksRuntime#runtime_owner}

---

### GoogleNotebooksRuntimeConfig <a name="GoogleNotebooksRuntimeConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    GoogleNotebooksRuntimeAccessConfig AccessConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleNotebooksRuntimeSoftwareConfig SoftwareConfig = null,
    GoogleNotebooksRuntimeTimeouts Timeouts = null,
    GoogleNotebooksRuntimeVirtualMachine VirtualMachine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.location">Location</a></code> | <code>string</code> | A reference to the zone where the machine resides. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.name">Name</a></code> | <code>string</code> | The name specified for the Notebook runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#id GoogleNotebooksRuntime#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#project GoogleNotebooksRuntime#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.softwareConfig">SoftwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.virtualMachine">VirtualMachine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a></code> | virtual_machine block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

A reference to the zone where the machine resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#location GoogleNotebooksRuntime#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name specified for the Notebook runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#name GoogleNotebooksRuntime#name}

---

##### `AccessConfig`<sup>Optional</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.accessConfig"></a>

```csharp
public GoogleNotebooksRuntimeAccessConfig AccessConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#access_config GoogleNotebooksRuntime#access_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#id GoogleNotebooksRuntime#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#project GoogleNotebooksRuntime#project}.

---

##### `SoftwareConfig`<sup>Optional</sup> <a name="SoftwareConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.softwareConfig"></a>

```csharp
public GoogleNotebooksRuntimeSoftwareConfig SoftwareConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#software_config GoogleNotebooksRuntime#software_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.timeouts"></a>

```csharp
public GoogleNotebooksRuntimeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts">GoogleNotebooksRuntimeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#timeouts GoogleNotebooksRuntime#timeouts}

---

##### `VirtualMachine`<sup>Optional</sup> <a name="VirtualMachine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeConfig.property.virtualMachine"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachine VirtualMachine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

virtual_machine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#virtual_machine GoogleNotebooksRuntime#virtual_machine}

---

### GoogleNotebooksRuntimeMetrics <a name="GoogleNotebooksRuntimeMetrics" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeMetrics {

};
```


### GoogleNotebooksRuntimeSoftwareConfig <a name="GoogleNotebooksRuntimeSoftwareConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeSoftwareConfig {
    string CustomGpuDriverPath = null,
    object EnableHealthMonitoring = null,
    object IdleShutdown = null,
    double IdleShutdownTimeout = null,
    object InstallGpuDriver = null,
    object Kernels = null,
    string NotebookUpgradeSchedule = null,
    string PostStartupScript = null,
    string PostStartupScriptBehavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>string</code> | Specify a custom Cloud Storage path where the GPU driver is stored. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring">EnableHealthMonitoring</a></code> | <code>object</code> | Verifies core internal services are running. Default: True. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdown">IdleShutdown</a></code> | <code>object</code> | Runtime will automatically shutdown after idle_shutdown_time. Default: True. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout">IdleShutdownTimeout</a></code> | <code>double</code> | Time in minutes to wait before shuting down runtime. Default: 180 minutes. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.installGpuDriver">InstallGpuDriver</a></code> | <code>object</code> | Install Nvidia Driver automatically. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.kernels">Kernels</a></code> | <code>object</code> | kernels block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule">NotebookUpgradeSchedule</a></code> | <code>string</code> | Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | Path to a Bash script that automatically runs after a notebook instance fully boots up. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |

---

##### `CustomGpuDriverPath`<sup>Optional</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.customGpuDriverPath"></a>

```csharp
public string CustomGpuDriverPath { get; set; }
```

- *Type:* string

Specify a custom Cloud Storage path where the GPU driver is stored.

If not specified, we'll automatically choose from official GPU drivers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#custom_gpu_driver_path GoogleNotebooksRuntime#custom_gpu_driver_path}

---

##### `EnableHealthMonitoring`<sup>Optional</sup> <a name="EnableHealthMonitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.enableHealthMonitoring"></a>

```csharp
public object EnableHealthMonitoring { get; set; }
```

- *Type:* object

Verifies core internal services are running. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#enable_health_monitoring GoogleNotebooksRuntime#enable_health_monitoring}

---

##### `IdleShutdown`<sup>Optional</sup> <a name="IdleShutdown" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdown"></a>

```csharp
public object IdleShutdown { get; set; }
```

- *Type:* object

Runtime will automatically shutdown after idle_shutdown_time. Default: True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#idle_shutdown GoogleNotebooksRuntime#idle_shutdown}

---

##### `IdleShutdownTimeout`<sup>Optional</sup> <a name="IdleShutdownTimeout" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.idleShutdownTimeout"></a>

```csharp
public double IdleShutdownTimeout { get; set; }
```

- *Type:* double

Time in minutes to wait before shuting down runtime. Default: 180 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#idle_shutdown_timeout GoogleNotebooksRuntime#idle_shutdown_timeout}

---

##### `InstallGpuDriver`<sup>Optional</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.installGpuDriver"></a>

```csharp
public object InstallGpuDriver { get; set; }
```

- *Type:* object

Install Nvidia Driver automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#install_gpu_driver GoogleNotebooksRuntime#install_gpu_driver}

---

##### `Kernels`<sup>Optional</sup> <a name="Kernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.kernels"></a>

```csharp
public object Kernels { get; set; }
```

- *Type:* object

kernels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#kernels GoogleNotebooksRuntime#kernels}

---

##### `NotebookUpgradeSchedule`<sup>Optional</sup> <a name="NotebookUpgradeSchedule" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.notebookUpgradeSchedule"></a>

```csharp
public string NotebookUpgradeSchedule { get; set; }
```

- *Type:* string

Cron expression in UTC timezone for schedule instance auto upgrade. Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#notebook_upgrade_schedule GoogleNotebooksRuntime#notebook_upgrade_schedule}

---

##### `PostStartupScript`<sup>Optional</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; set; }
```

- *Type:* string

Path to a Bash script that automatically runs after a notebook instance fully boots up.

The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#post_startup_script GoogleNotebooksRuntime#post_startup_script}

---

##### `PostStartupScriptBehavior`<sup>Optional</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; set; }
```

- *Type:* string

Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#post_startup_script_behavior GoogleNotebooksRuntime#post_startup_script_behavior}

---

### GoogleNotebooksRuntimeSoftwareConfigKernels <a name="GoogleNotebooksRuntimeSoftwareConfigKernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeSoftwareConfigKernels {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#repository GoogleNotebooksRuntime#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernels.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#tag GoogleNotebooksRuntime#tag}

---

### GoogleNotebooksRuntimeTimeouts <a name="GoogleNotebooksRuntimeTimeouts" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#create GoogleNotebooksRuntime#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#delete GoogleNotebooksRuntime#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#update GoogleNotebooksRuntime#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#create GoogleNotebooksRuntime#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#delete GoogleNotebooksRuntime#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#update GoogleNotebooksRuntime#update}.

---

### GoogleNotebooksRuntimeVirtualMachine <a name="GoogleNotebooksRuntimeVirtualMachine" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachine {
    GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig VirtualMachineConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine.property.virtualMachineConfig">VirtualMachineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | virtual_machine_config block. |

---

##### `VirtualMachineConfig`<sup>Optional</sup> <a name="VirtualMachineConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine.property.virtualMachineConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig VirtualMachineConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

virtual_machine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#virtual_machine_config GoogleNotebooksRuntime#virtual_machine_config}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig {
    GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk DataDisk,
    string MachineType,
    GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig AcceleratorConfig = null,
    object ContainerImages = null,
    GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig EncryptionConfig = null,
    object InternalIpOnly = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string Network = null,
    string NicType = null,
    string ReservedIpRange = null,
    GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig ShieldedInstanceConfig = null,
    string Subnet = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | data_disk block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType">MachineType</a></code> | <code>string</code> | The Compute Engine machine type used for runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | accelerator_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages">ContainerImages</a></code> | <code>object</code> | container_images block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly">InternalIpOnly</a></code> | <code>object</code> | If true, runtime will only have internal IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)). |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network">Network</a></code> | <code>string</code> | The Compute Engine network to be used for machine communications. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType">NicType</a></code> | <code>string</code> | The type of vNIC to be used on this interface. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet">Subnet</a></code> | <code>string</code> | The Compute Engine subnetwork to be used for machine communications. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags">Tags</a></code> | <code>string[]</code> | The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)). |

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.dataDisk"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk DataDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

data_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#data_disk GoogleNotebooksRuntime#data_disk}

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The Compute Engine machine type used for runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#machine_type GoogleNotebooksRuntime#machine_type}

---

##### `AcceleratorConfig`<sup>Optional</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.acceleratorConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig AcceleratorConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

accelerator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#accelerator_config GoogleNotebooksRuntime#accelerator_config}

---

##### `ContainerImages`<sup>Optional</sup> <a name="ContainerImages" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.containerImages"></a>

```csharp
public object ContainerImages { get; set; }
```

- *Type:* object

container_images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#container_images GoogleNotebooksRuntime#container_images}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.encryptionConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig EncryptionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#encryption_config GoogleNotebooksRuntime#encryption_config}

---

##### `InternalIpOnly`<sup>Optional</sup> <a name="InternalIpOnly" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.internalIpOnly"></a>

```csharp
public object InternalIpOnly { get; set; }
```

- *Type:* object

If true, runtime will only have internal IP addresses.

By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#internal_ip_only GoogleNotebooksRuntime#internal_ip_only}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this runtime.

Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The Compute Engine metadata entries to add to virtual machine. (see [Project and instance metadata](https://cloud.google.com /compute/docs/storing-retrieving-metadata#project_and_instance _metadata)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#metadata GoogleNotebooksRuntime#metadata}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The Compute Engine network to be used for machine communications.

Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/global/default'
* 'projects/[project_id]/regions/global/default'
  Runtimes are managed resources inside Google Infrastructure.
  Runtimes support the following network configurations:
* Google Managed Network (Network & subnet are empty)
* Consumer Project VPC (network & subnet are required). Requires
  configuring Private Service Access.
* Shared VPC (network & subnet are required). Requires
  configuring Private Service Access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#network GoogleNotebooksRuntime#network}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

The type of vNIC to be used on this interface.

This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#nic_type GoogleNotebooksRuntime#nic_type}

---

##### `ReservedIpRange`<sup>Optional</sup> <a name="ReservedIpRange" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; set; }
```

- *Type:* string

Reserved IP Range name is used for VPC Peering. The subnetwork allocation will use the range *name* if it's assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#reserved_ip_range GoogleNotebooksRuntime#reserved_ip_range}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.shieldedInstanceConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#shielded_instance_config GoogleNotebooksRuntime#shielded_instance_config}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

The Compute Engine subnetwork to be used for machine communications.

Cannot be specified with network. A full URL or
partial URI are valid. Examples:

* 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/us-east1/subnetworks/sub0'
* 'projects/[project_id]/regions/us-east1/subnetworks/sub0'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#subnet GoogleNotebooksRuntime#subnet}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The Compute Engine tags to add to runtime (see [Tagging instances] (https://cloud.google.com/compute/docs/ label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#tags GoogleNotebooksRuntime#tags}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig {
    double CoreCount = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount">CoreCount</a></code> | <code>double</code> | Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type">Type</a></code> | <code>string</code> | Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'. |

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.coreCount"></a>

```csharp
public double CoreCount { get; set; }
```

- *Type:* double

Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#core_count GoogleNotebooksRuntime#core_count}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Accelerator model. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/reference/ rest/v1/projects.locations.runtimes#AcceleratorType'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#type GoogleNotebooksRuntime#type}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#repository GoogleNotebooksRuntime#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#tag GoogleNotebooksRuntime#tag}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk {
    GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InitializeParams = null,
    string Interface = null,
    string Mode = null,
    string Source = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | initialize_params block. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface">Interface</a></code> | <code>string</code> | "Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode">Mode</a></code> | <code>string</code> | The mode in which to attach this disk, either READ_WRITE or READ_ONLY. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source">Source</a></code> | <code>string</code> | Specifies a valid partial or full URL to an existing Persistent Disk resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type">Type</a></code> | <code>string</code> | Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT. |

---

##### `InitializeParams`<sup>Optional</sup> <a name="InitializeParams" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.initializeParams"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InitializeParams { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

initialize_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#initialize_params GoogleNotebooksRuntime#initialize_params}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

"Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.

The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#interface GoogleNotebooksRuntime#interface}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode in which to attach this disk, either READ_WRITE or READ_ONLY.

If not specified, the default is to attach
the disk in READ_WRITE mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#mode GoogleNotebooksRuntime#mode}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Specifies a valid partial or full URL to an existing Persistent Disk resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#source GoogleNotebooksRuntime#source}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#type GoogleNotebooksRuntime#type}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
    string Description = null,
    string DiskName = null,
    double DiskSizeGb = null,
    string DiskType = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description">Description</a></code> | <code>string</code> | Provide this property when creating the disk. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName">DiskName</a></code> | <code>string</code> | Specifies the disk name. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | Specifies the size of the disk in base-2 GB. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType">DiskType</a></code> | <code>string</code> | The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to apply to this disk. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Provide this property when creating the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#description GoogleNotebooksRuntime#description}

---

##### `DiskName`<sup>Optional</sup> <a name="DiskName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskName"></a>

```csharp
public string DiskName { get; set; }
```

- *Type:* string

Specifies the disk name.

If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#disk_name GoogleNotebooksRuntime#disk_name}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; set; }
```

- *Type:* double

Specifies the size of the disk in base-2 GB.

If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#disk_size_gb GoogleNotebooksRuntime#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

The type of the boot disk attached to this runtime, defaults to standard persistent disk. For valid values, see 'https://cloud.google.com/vertex-ai/docs/workbench/ reference/rest/v1/projects.locations.runtimes#disktype'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#disk_type GoogleNotebooksRuntime#disk_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to apply to this disk.

These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#labels GoogleNotebooksRuntime#labels}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig {
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS resource identifier of the customer-managed encryption key used to protect a resource, such as a disks.

It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#kms_key GoogleNotebooksRuntime#kms_key}

---

### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Defines whether the instance has integrity monitoring enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Defines whether the instance has the vTPM enabled. Enabled by default. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Defines whether the instance has integrity monitoring enabled.

Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#enable_integrity_monitoring GoogleNotebooksRuntime#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Defines whether the instance has Secure Boot enabled.Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#enable_secure_boot GoogleNotebooksRuntime#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Defines whether the instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_notebooks_runtime#enable_vtpm GoogleNotebooksRuntime#enable_vtpm}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNotebooksRuntimeAccessConfigOutputReference <a name="GoogleNotebooksRuntimeAccessConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner">ResetRuntimeOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetRuntimeOwner` <a name="ResetRuntimeOwner" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.resetRuntimeOwner"></a>

```csharp
private void ResetRuntimeOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.proxyUri">ProxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput">RuntimeOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner">RuntimeOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProxyUri`<sup>Required</sup> <a name="ProxyUri" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.proxyUri"></a>

```csharp
public string ProxyUri { get; }
```

- *Type:* string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `RuntimeOwnerInput`<sup>Optional</sup> <a name="RuntimeOwnerInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwnerInput"></a>

```csharp
public string RuntimeOwnerInput { get; }
```

- *Type:* string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `RuntimeOwner`<sup>Required</sup> <a name="RuntimeOwner" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.runtimeOwner"></a>

```csharp
public string RuntimeOwner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeAccessConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeAccessConfig">GoogleNotebooksRuntimeAccessConfig</a>

---


### GoogleNotebooksRuntimeMetricsList <a name="GoogleNotebooksRuntimeMetricsList" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.get"></a>

```csharp
private GoogleNotebooksRuntimeMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleNotebooksRuntimeMetricsOutputReference <a name="GoogleNotebooksRuntimeMetricsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.systemMetrics">SystemMetrics</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics">GoogleNotebooksRuntimeMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemMetrics`<sup>Required</sup> <a name="SystemMetrics" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.systemMetrics"></a>

```csharp
public StringMap SystemMetrics { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetricsOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeMetrics">GoogleNotebooksRuntimeMetrics</a>

---


### GoogleNotebooksRuntimeSoftwareConfigKernelsList <a name="GoogleNotebooksRuntimeSoftwareConfigKernelsList" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeSoftwareConfigKernelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.get"></a>

```csharp
private GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference <a name="GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNotebooksRuntimeSoftwareConfigOutputReference <a name="GoogleNotebooksRuntimeSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeSoftwareConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.putKernels">PutKernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath">ResetCustomGpuDriverPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring">ResetEnableHealthMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown">ResetIdleShutdown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout">ResetIdleShutdownTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver">ResetInstallGpuDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetKernels">ResetKernels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule">ResetNotebookUpgradeSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript">ResetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior">ResetPostStartupScriptBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKernels` <a name="PutKernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.putKernels"></a>

```csharp
private void PutKernels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.putKernels.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomGpuDriverPath` <a name="ResetCustomGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetCustomGpuDriverPath"></a>

```csharp
private void ResetCustomGpuDriverPath()
```

##### `ResetEnableHealthMonitoring` <a name="ResetEnableHealthMonitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetEnableHealthMonitoring"></a>

```csharp
private void ResetEnableHealthMonitoring()
```

##### `ResetIdleShutdown` <a name="ResetIdleShutdown" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdown"></a>

```csharp
private void ResetIdleShutdown()
```

##### `ResetIdleShutdownTimeout` <a name="ResetIdleShutdownTimeout" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetIdleShutdownTimeout"></a>

```csharp
private void ResetIdleShutdownTimeout()
```

##### `ResetInstallGpuDriver` <a name="ResetInstallGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetInstallGpuDriver"></a>

```csharp
private void ResetInstallGpuDriver()
```

##### `ResetKernels` <a name="ResetKernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetKernels"></a>

```csharp
private void ResetKernels()
```

##### `ResetNotebookUpgradeSchedule` <a name="ResetNotebookUpgradeSchedule" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetNotebookUpgradeSchedule"></a>

```csharp
private void ResetNotebookUpgradeSchedule()
```

##### `ResetPostStartupScript` <a name="ResetPostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScript"></a>

```csharp
private void ResetPostStartupScript()
```

##### `ResetPostStartupScriptBehavior` <a name="ResetPostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.resetPostStartupScriptBehavior"></a>

```csharp
private void ResetPostStartupScriptBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernels">Kernels</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList">GoogleNotebooksRuntimeSoftwareConfigKernelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable">Upgradeable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput">CustomGpuDriverPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput">EnableHealthMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput">IdleShutdownInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput">IdleShutdownTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput">InstallGpuDriverInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput">KernelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput">NotebookUpgradeScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput">PostStartupScriptBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput">PostStartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath">CustomGpuDriverPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring">EnableHealthMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown">IdleShutdown</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout">IdleShutdownTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver">InstallGpuDriver</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule">NotebookUpgradeSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript">PostStartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior">PostStartupScriptBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Kernels`<sup>Required</sup> <a name="Kernels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernels"></a>

```csharp
public GoogleNotebooksRuntimeSoftwareConfigKernelsList Kernels { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigKernelsList">GoogleNotebooksRuntimeSoftwareConfigKernelsList</a>

---

##### `Upgradeable`<sup>Required</sup> <a name="Upgradeable" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.upgradeable"></a>

```csharp
public IResolvable Upgradeable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CustomGpuDriverPathInput`<sup>Optional</sup> <a name="CustomGpuDriverPathInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPathInput"></a>

```csharp
public string CustomGpuDriverPathInput { get; }
```

- *Type:* string

---

##### `EnableHealthMonitoringInput`<sup>Optional</sup> <a name="EnableHealthMonitoringInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoringInput"></a>

```csharp
public object EnableHealthMonitoringInput { get; }
```

- *Type:* object

---

##### `IdleShutdownInput`<sup>Optional</sup> <a name="IdleShutdownInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownInput"></a>

```csharp
public object IdleShutdownInput { get; }
```

- *Type:* object

---

##### `IdleShutdownTimeoutInput`<sup>Optional</sup> <a name="IdleShutdownTimeoutInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeoutInput"></a>

```csharp
public double IdleShutdownTimeoutInput { get; }
```

- *Type:* double

---

##### `InstallGpuDriverInput`<sup>Optional</sup> <a name="InstallGpuDriverInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriverInput"></a>

```csharp
public object InstallGpuDriverInput { get; }
```

- *Type:* object

---

##### `KernelsInput`<sup>Optional</sup> <a name="KernelsInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.kernelsInput"></a>

```csharp
public object KernelsInput { get; }
```

- *Type:* object

---

##### `NotebookUpgradeScheduleInput`<sup>Optional</sup> <a name="NotebookUpgradeScheduleInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeScheduleInput"></a>

```csharp
public string NotebookUpgradeScheduleInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehaviorInput`<sup>Optional</sup> <a name="PostStartupScriptBehaviorInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```csharp
public string PostStartupScriptBehaviorInput { get; }
```

- *Type:* string

---

##### `PostStartupScriptInput`<sup>Optional</sup> <a name="PostStartupScriptInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptInput"></a>

```csharp
public string PostStartupScriptInput { get; }
```

- *Type:* string

---

##### `CustomGpuDriverPath`<sup>Required</sup> <a name="CustomGpuDriverPath" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.customGpuDriverPath"></a>

```csharp
public string CustomGpuDriverPath { get; }
```

- *Type:* string

---

##### `EnableHealthMonitoring`<sup>Required</sup> <a name="EnableHealthMonitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.enableHealthMonitoring"></a>

```csharp
public object EnableHealthMonitoring { get; }
```

- *Type:* object

---

##### `IdleShutdown`<sup>Required</sup> <a name="IdleShutdown" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdown"></a>

```csharp
public object IdleShutdown { get; }
```

- *Type:* object

---

##### `IdleShutdownTimeout`<sup>Required</sup> <a name="IdleShutdownTimeout" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.idleShutdownTimeout"></a>

```csharp
public double IdleShutdownTimeout { get; }
```

- *Type:* double

---

##### `InstallGpuDriver`<sup>Required</sup> <a name="InstallGpuDriver" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.installGpuDriver"></a>

```csharp
public object InstallGpuDriver { get; }
```

- *Type:* object

---

##### `NotebookUpgradeSchedule`<sup>Required</sup> <a name="NotebookUpgradeSchedule" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.notebookUpgradeSchedule"></a>

```csharp
public string NotebookUpgradeSchedule { get; }
```

- *Type:* string

---

##### `PostStartupScript`<sup>Required</sup> <a name="PostStartupScript" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScript"></a>

```csharp
public string PostStartupScript { get; }
```

- *Type:* string

---

##### `PostStartupScriptBehavior`<sup>Required</sup> <a name="PostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.postStartupScriptBehavior"></a>

```csharp
public string PostStartupScriptBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeSoftwareConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeSoftwareConfig">GoogleNotebooksRuntimeSoftwareConfig</a>

---


### GoogleNotebooksRuntimeTimeoutsOutputReference <a name="GoogleNotebooksRuntimeTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNotebooksRuntimeVirtualMachineOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig">PutVirtualMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig">ResetVirtualMachineConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVirtualMachineConfig` <a name="PutVirtualMachineConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig"></a>

```csharp
private void PutVirtualMachineConfig(GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.putVirtualMachineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---

##### `ResetVirtualMachineConfig` <a name="ResetVirtualMachineConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.resetVirtualMachineConfig"></a>

```csharp
private void ResetVirtualMachineConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig">VirtualMachineConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput">VirtualMachineConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `VirtualMachineConfig`<sup>Required</sup> <a name="VirtualMachineConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference VirtualMachineConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference</a>

---

##### `VirtualMachineConfigInput`<sup>Optional</sup> <a name="VirtualMachineConfigInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.virtualMachineConfigInput"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig VirtualMachineConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachine">GoogleNotebooksRuntimeVirtualMachine</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetCoreCount"></a>

```csharp
private void ResetCoreCount()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount">CoreCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCountInput"></a>

```csharp
public double CoreCountInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.coreCount"></a>

```csharp
public double CoreCount { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get"></a>

```csharp
private GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName">ResetDiskName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDiskName` <a name="ResetDiskName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskName"></a>

```csharp
private void ResetDiskName()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput">DiskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName">DiskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiskNameInput`<sup>Optional</sup> <a name="DiskNameInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskNameInput"></a>

```csharp
public string DiskNameInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGbInput"></a>

```csharp
public double DiskSizeGbInput { get; }
```

- *Type:* double

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskName"></a>

```csharp
public string DiskName { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskSizeGb"></a>

```csharp
public double DiskSizeGb { get; }
```

- *Type:* double

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams">PutInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams">ResetInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitializeParams` <a name="PutInitializeParams" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams"></a>

```csharp
private void PutInitializeParams(GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.putInitializeParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---

##### `ResetInitializeParams` <a name="ResetInitializeParams" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInitializeParams"></a>

```csharp
private void ResetInitializeParams()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot">Boot</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures">GuestOsFeatures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index">Index</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams">InitializeParams</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses">Licenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput">InitializeParamsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface">Interface</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.autoDelete"></a>

```csharp
public IResolvable AutoDelete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Boot`<sup>Required</sup> <a name="Boot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.boot"></a>

```csharp
public IResolvable Boot { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.deviceName"></a>

```csharp
public string DeviceName { get; }
```

- *Type:* string

---

##### `GuestOsFeatures`<sup>Required</sup> <a name="GuestOsFeatures" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.guestOsFeatures"></a>

```csharp
public string[] GuestOsFeatures { get; }
```

- *Type:* string[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.index"></a>

```csharp
public double Index { get; }
```

- *Type:* double

---

##### `InitializeParams`<sup>Required</sup> <a name="InitializeParams" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParams"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference InitializeParams { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Licenses`<sup>Required</sup> <a name="Licenses" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.licenses"></a>

```csharp
public string[] Licenses { get; }
```

- *Type:* string[]

---

##### `InitializeParamsInput`<sup>Optional</sup> <a name="InitializeParamsInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.initializeParamsInput"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams InitializeParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams</a>

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig">PutAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages">PutContainerImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk">PutDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig">ResetAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages">ResetContainerImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly">ResetInternalIpOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange">ResetReservedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorConfig` <a name="PutAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig"></a>

```csharp
private void PutAcceleratorConfig(GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putAcceleratorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---

##### `PutContainerImages` <a name="PutContainerImages" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages"></a>

```csharp
private void PutContainerImages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putContainerImages.parameter.value"></a>

- *Type:* object

---

##### `PutDataDisk` <a name="PutDataDisk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk"></a>

```csharp
private void PutDataDisk(GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putDataDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig"></a>

```csharp
private void PutEncryptionConfig(GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---

##### `ResetAcceleratorConfig` <a name="ResetAcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetAcceleratorConfig"></a>

```csharp
private void ResetAcceleratorConfig()
```

##### `ResetContainerImages` <a name="ResetContainerImages" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetContainerImages"></a>

```csharp
private void ResetContainerImages()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetEncryptionConfig"></a>

```csharp
private void ResetEncryptionConfig()
```

##### `ResetInternalIpOnly` <a name="ResetInternalIpOnly" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetInternalIpOnly"></a>

```csharp
private void ResetInternalIpOnly()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetReservedIpRange` <a name="ResetReservedIpRange" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetReservedIpRange"></a>

```csharp
private void ResetReservedIpRange()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetSubnet"></a>

```csharp
private void ResetSubnet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig">AcceleratorConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages">ContainerImages</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk">DataDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes">GuestAttributes</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput">AcceleratorConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput">ContainerImagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput">DataDiskInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput">InternalIpOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput">ReservedIpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly">InternalIpOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange">ReservedIpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorConfig`<sup>Required</sup> <a name="AcceleratorConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference AcceleratorConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference</a>

---

##### `ContainerImages`<sup>Required</sup> <a name="ContainerImages" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImages"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList ContainerImages { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList</a>

---

##### `DataDisk`<sup>Required</sup> <a name="DataDisk" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDisk"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference DataDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference</a>

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference EncryptionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference</a>

---

##### `GuestAttributes`<sup>Required</sup> <a name="GuestAttributes" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.guestAttributes"></a>

```csharp
public StringMap GuestAttributes { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfig"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference</a>

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `AcceleratorConfigInput`<sup>Optional</sup> <a name="AcceleratorConfigInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.acceleratorConfigInput"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig AcceleratorConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig</a>

---

##### `ContainerImagesInput`<sup>Optional</sup> <a name="ContainerImagesInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.containerImagesInput"></a>

```csharp
public object ContainerImagesInput { get; }
```

- *Type:* object

---

##### `DataDiskInput`<sup>Optional</sup> <a name="DataDiskInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.dataDiskInput"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk DataDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk</a>

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.encryptionConfigInput"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig EncryptionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig</a>

---

##### `InternalIpOnlyInput`<sup>Optional</sup> <a name="InternalIpOnlyInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnlyInput"></a>

```csharp
public object InternalIpOnlyInput { get; }
```

- *Type:* object

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `ReservedIpRangeInput`<sup>Optional</sup> <a name="ReservedIpRangeInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRangeInput"></a>

```csharp
public string ReservedIpRangeInput { get; }
```

- *Type:* string

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.shieldedInstanceConfigInput"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `InternalIpOnly`<sup>Required</sup> <a name="InternalIpOnly" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalIpOnly"></a>

```csharp
public object InternalIpOnly { get; }
```

- *Type:* object

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `ReservedIpRange`<sup>Required</sup> <a name="ReservedIpRange" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.reservedIpRange"></a>

```csharp
public string ReservedIpRange { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfig</a>

---


### GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference <a name="GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNotebooksRuntime.GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig">GoogleNotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig</a>

---



